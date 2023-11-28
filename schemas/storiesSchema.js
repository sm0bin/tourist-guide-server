const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    story: {
        type: String,
        required: true
    }


});



const Stories = new mongoose.model('Stories', storiesSchema);


module.exports = Stories;


// {
//     "img": "https://source.unsplash.com/_XIUcteveNQ",
//     "name": "Aisha Khan",
//     "designation": "Photography Enthusiast",
//     "rating": 4.9,
//     "story": "Capturing the essence of Bangladesh was a dream come true. [Tour Website Name] provided the perfect blend of picturesque landscapes and cultural richness."
//   }