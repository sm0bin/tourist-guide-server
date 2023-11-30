const mongoose = require('mongoose');

const touristsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    wishlist: {
        type: Array,
        required: false
    },
    bookings: {
        type: Array,
        required: false
    },
    coupon: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    }
})

const Tourists = new mongoose.model('Tourists', touristsSchema);

module.exports = Tourists;