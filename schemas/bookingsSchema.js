const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    touristName: {
        type: String,
        required: true
    },
    touristEmail: {
        type: String,
        required: true
    },
    touristImage: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    guideId: {
        type: String,
        required: true
    },
    tourId: {
        type: String,
        required: true
    }
})

const Bookings = new mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;



    // const bookingTour = {
    //     touristName: name,
    //     touristEmail: email,
    //     touristImage: imageUrl,
    //     date: date,
    //     price: tour.price,
    //     guideId: guide,
    //     tourId: tour._id
    // }