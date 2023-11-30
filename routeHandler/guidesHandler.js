const express = require('express');
const router = express.Router();

const TourGuides = require('../schemas/tourGuidesSchema');
const verifyToken = require('../middlewares/verifyToken');
const Bookings = require('../schemas/bookingsSchema');

router.get('/', async (req, res) => {
    try {
        const tourGuides = await TourGuides.find().select("name profilePicture skills education contactDetails rating");
        res.send(tourGuides);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const tourGuide = await TourGuides.findOne({ _id: req.params.id });
        res.send(tourGuide);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/guide/:email', async (req, res) => {
    try {
        const tourGuide = await TourGuides.findOne({ 'contactDetails.email': req.params.email });

        res.send(tourGuide);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/bookings/:email', async (req, res) => {
    try {
        const tourGuide = await TourGuides.findOne({ 'contactDetails.email': req.params.email });
        const bookings = await Bookings.find({ guideId: tourGuide._id });
        res.send(bookings);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.post('/', verifyToken, async (req, res) => {
    try {
        const tourGuide = new TourGuides(req.body);
        await tourGuide.save();
        res.send(tourGuide);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;
