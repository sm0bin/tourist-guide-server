const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const Stories = require('../schemas/storiesSchema');

router.get('/', async (req, res) => {
    try {
        const stories = await Stories.find();
        res.send(stories);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

router.post('/', verifyToken, async (req, res) => {
    try {
        const story = new Stories(req.body);
        await story.save();
        res.send(story);
    } catch (error) {
        console.error(error.message)
        res.status(404).send({ error: error.message });
    }
})

module.exports = router;