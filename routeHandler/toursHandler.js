const express = require('express');
const router = express.Router();

const Tours = require('../schemas/toursSchema');


router.get('/', async (req, res) => {
    try {
        const tours = await Tours.find().select("thumbnail tourType tripTitle price description");
        res.send(tours);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/types/:type', async (req, res) => {
    try {
        const tours = await Tours.find({ tourType: req.params.type }).select("thumbnail tourType tripTitle price description");
        res.send(tours);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const tour = await Tours.findOne({ _id: req.params.id });
        res.send(tour);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    try {
        const tour = new Tours(req.body);
        await tour.save();
        res.send(tour);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})


module.exports = router;