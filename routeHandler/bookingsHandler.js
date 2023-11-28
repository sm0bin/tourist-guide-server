const express = require('express');
const router = express.Router();

const Bookings = require('../schemas/bookingsSchema');


router.get('/', async (req, res) => {
    try {
        const bookings = await Bookings.find();
        res.send(bookings);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const booking = new Bookings(req.body);
        await booking.save();
        res.send(booking);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;
