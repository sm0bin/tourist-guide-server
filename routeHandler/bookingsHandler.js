const express = require('express');
const router = express.Router();

const Bookings = require('../schemas/bookingsSchema');
const Tourists = require('../schemas/touristsSchema');
const verifyToken = require('../middlewares/verifyToken');


router.get('/', async (req, res) => {
    try {
        const bookings = await Bookings.find();
        res.send(bookings);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/:email', verifyToken, async (req, res) => {
    const { email } = req.params;
    console.log(email);
    try {
        const bookings = await Bookings.find({ userEmail: email });
        res.send(bookings);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const { tourId, userEmail } = req.body;

        const booking = new Bookings(req.body);
        await booking.save();


        const tourist = await Tourists.findOne({ email: userEmail });
        tourist.bookings.push(tourId);
        await tourist.save();
        res.send(tourist.bookings);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;
