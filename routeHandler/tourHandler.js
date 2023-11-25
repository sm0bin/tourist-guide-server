const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const tourSchema = require('../schemas/tourSchema');
const Tour = new mongoose.model('Tour', tourSchema);
const TourTypes = require('../schemas/tourTypesSchema');
const TourGuides = require('../schemas/tourGuidesSchema');


router.get('/tours', async (req, res) => {
    const tours = await Tour.find();
    res.send(tours);
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
    const tour = new Tour(req.body);
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
        const tour = await Tour.findOne({ _id: req.params.id });
        res.send(tour);
    } catch {
        res.status(404);
        res.send({ error: "Tour doesn't exist!" });
    }
})

router.get('/types/:id', async (req, res) => {
    try {
        const tourType = await TourTypes.findOne({ _id: req.params.id });
        res.send(tourType);
    } catch {
        res.status(404);
        res.send({ error: "Tour Type doesn't exist!" });
    }
})

router.get('/guides/:id', async (req, res) => {
    try {
        const tourGuide = await TourGuides.findOne({ _id: req.params.id });
        res.send(tourGuide);
    } catch {
        res.status(404);
        res.send({ error: "Tour Guide doesn't exist!" });
    }
})

router.post("/jwt", (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.send({ token });
})




module.exports = router;