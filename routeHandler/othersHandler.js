const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const TourTypes = require('../schemas/tourTypesSchema');
const Tourists = require('../schemas/touristsSchema');

router.get('/', (req, res) => {
    res.send("Tourist Guide Server is running...");
})


router.post("/jwt", async (req, res) => {
    try {
        const user = req.body;
        // console.log(user);
        // console.log(req.headers);
        const tourist = new Tourists(user);
        await tourist.save();

        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.send({ token });
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.get('/types', async (req, res) => {
    try {
        const tourTypes = await TourTypes.find();
        res.send(tourTypes);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;
