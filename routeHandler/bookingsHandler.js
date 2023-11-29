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

// router.get('/:id')

router.post('/', verifyToken, async (req, res) => {
    try {
        const booking = new Bookings(req.body);
        const result = await booking.save();
        res.send(result);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.put('/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { price } = req.body;
        const result = await Bookings.updateOne({ _id: id }, { $set: { price: price } });
        res.send(result);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})



// router.delete('/:id', verifyToken, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await Bookings.deleteOne({ _id: id });
//         res.send(result);
//     } catch (error) {
//         console.error(error.message)
//         res.status(404).send({ error: error.message });
//     }
// })

module.exports = router;
