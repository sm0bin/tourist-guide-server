const express = require('express');
const router = express.Router();

// Define the schema
const Tourists = require('../schemas/touristsSchema');
const Tours = require('../schemas/toursSchema');
const verifyToken = require('../middlewares/verifyToken');
const Bookings = require('../schemas/bookingsSchema');


// Get all tourists
router.get('/', async (req, res) => {
    try {
        const tourists = await Tourists.find();
        res.send(tourists);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})


// Get a tourist by email
router.get('/:email', verifyToken, async (req, res) => {
    try {
        const tourist = await Tourists.findOne({ email: req.params.email });
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Create a tourist
router.post('/', async (req, res) => {
    try {
        const tourist = new Tourists(req.body);
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Get a tourist's wishlist
router.get('/wishlist/:email', verifyToken, async (req, res) => {
    try {
        const { email } = req.params;
        const tourist = await Tourists.findOne({ email: email });
        // res.send(tourist.wishlist);
        const tours = await Tours.find({ _id: { $in: tourist.wishlist } });
        res.send(tours);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Add a tour to wishlist
router.post('/wishlist', verifyToken, async (req, res) => {
    try {
        const { email, tourId } = req.body;
        console.log(email, tourId);
        const tourist = await Tourists.findOne({ email: email });
        tourist.wishlist.push(tourId);
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Remove a tour from wishlist
router.post('/wishlist/remove', verifyToken, async (req, res) => {
    try {
        const { id, email } = req.body;
        console.log(email);
        const tourist = await Tourists.findOne({ email: email });
        console.log(tourist);
        tourist.wishlist.pull(id);
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Get a tourist's bookings
router.get('/bookings/:email', verifyToken, async (req, res) => {
    try {
        const { email } = req.params;
        const tourist = await Tourists.findOne({ email: email });
        const tours = await Tours.find({ _id: { $in: tourist.bookings } });
        res.send(tours);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Add a bookingId to a tourist bookings
router.post('/bookings', verifyToken, async (req, res) => {
    try {
        const { email, bookingId } = req.body;
        console.log(email, bookingId);
        const tourist = await Tourists.findOne({ email: email });
        tourist.bookings.push(bookingId);
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})


// Remove a booking from both tourist and bookings
router.post('/bookings/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { email } = req.body;
        console.log(email);
        const tourist = await Tourists.findOne({ email: email });
        tourist.bookings.pull(id);
        await tourist.save();
        const result = await Bookings.deleteOne({ _id: id });
        console.log(tourist);
        console.log(result);
        res.send({ tourist, result });
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})
// Get a tourist's coupon
router.get('/coupon/:email', verifyToken, async (req, res) => {
    try {
        const { email } = req.params;
        const tourist = await Tourists.findOne({ email: email });
        res.send(tourist.coupon);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

// Update a tourist's coupon to a tourist
router.post('/coupon', verifyToken, async (req, res) => {
    try {
        const { email, coupon } = req.body;
        console.log(email, coupon);
        const tourist = await Tourists.findOne({ email: email });
        tourist.coupon = coupon;
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;