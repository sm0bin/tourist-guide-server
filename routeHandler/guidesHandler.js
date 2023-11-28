const express = require('express');
const router = express.Router();

const TourGuides = require('../schemas/tourGuidesSchema');

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

router.post('/', async (req, res) => {
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
