const express = require('express');
const router = express.Router();

const Tourists = require('../schemas/touristsSchema');
const Tours = require('../schemas/toursSchema');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', async (req, res) => {
    try {
        const tourists = await Tourists.find();
        res.send(tourists);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/tourist', verifyToken, async (req, res) => {
    try {
        const tourist = await Tourists.findOne({ email: req.body.email });
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

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

router.post('/bookings', verifyToken, async (req, res) => {
    try {
        const { email, tourId } = req.body;
        console.log(email, tourId);
        const tourist = await Tourists.findOne({ email: email });
        tourist.bookings.push(tourId);
        await tourist.save();
        res.send(tourist);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

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