const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Tours = require('../schemas/toursSchema');
const TourTypes = require('../schemas/tourTypesSchema');
const TourGuides = require('../schemas/tourGuidesSchema');


router.get('/tours', async (req, res) => {
    try {
        const tours = await Tours.find().select("thumbnail tourType tripTitle price description");
        res.send(tours);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/types', async (req, res) => {
    const tourTypes = await TourTypes.find();
    res.send(tourTypes);
})

router.get('/guides', async (req, res) => {
    const tourGuides = await TourGuides.find();
    res.send(tourGuides);
})


router.post('/tours', async (req, res) => {
    const tour = new Tours(req.body);
    await tour.save();
    res.send(tour);
})

router.post('/types', async (req, res) => {
    const tourType = new TourTypes(req.body);
    await tourType.save();
    res.send(tourType);
})

router.post('/guides', async (req, res) => {
    const tourGuide = new TourGuides(req.body);
    await tourGuide.save();
    res.send(tourGuide);
})

router.get('/tours/:id', async (req, res) => {
    try {
        const tour = await Tours.findOne({ _id: req.params.id });
        res.send(tour);
    } catch (error) {
        console.error(error.mess)
        res.status(404).send({ error: error.message });
    }
})

router.get('/types/:id', async (req, res) => {
    try {
        const tourType = await TourTypes.findOne({ _id: req.params.id });
        res.send(tourType);
    } catch (error) {
        console.error(error.mess)
        res.status(404).send({ error: error.message });
    }
})

router.get('/guides/:id', async (req, res) => {
    try {
        const tourGuide = await TourGuides.findOne({ _id: req.params.id });
        res.send(tourGuide);
    } catch (error) {
        console.error(error.mess)
        res.status(404).send({ error: error.message });
    }
})

router.post("/jwt", (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.send({ token });
})




module.exports = router;