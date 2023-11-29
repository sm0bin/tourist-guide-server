const mongoose = require('mongoose');

const touristsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
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
    }
})

const Tourists = new mongoose.model('Tourists', touristsSchema);

module.exports = Tourists;