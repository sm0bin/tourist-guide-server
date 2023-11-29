const mongoose = require('mongoose');

const bookingsSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
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
    guideId: {
        type: String,
        required: true
    },
    guideName: {
        type: String,
        required: true
    },
    tourId: {
        type: String,
        required: true
    },
    tourName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    // coupon: {
    //     type: String,
    //     required: false
    // }
})

const Bookings = new mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;



// const bookingTour = {
//     userEmail: user.email,
//     touristName,
//     touristEmail,
//     touristImage,
//     date,
//     guideId,
//     guideName,
//     tourId: tour._id,
//     tourName: tour.tripTitle,
//     price: tour.price,
// }