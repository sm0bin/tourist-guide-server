const mongoose = require('mongoose');

const tourTypeSchema = new mongoose.Schema({
    tourType: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

const TourTypes = new mongoose.model('Types', tourTypeSchema);

module.exports = TourTypes;