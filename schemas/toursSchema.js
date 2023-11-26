const mongoose = require('mongoose');

// {
//     "imageUrl": "https://source.unsplash.com/MrKPi-yajC0/640x360",
//     "tourType": "Adventure",
//     "icon": "🌄",
//     "tripTitle": "Mountain Expedition",
//     "price": 150,
//     "tourDetails": {
//       "duration": "7 days",
//       "accommodation": "Alpine Chalets",
//       "activities": ["Mountain Climbing", "Zip-lining", "Bonfire Nights"]
//     },
//     "description": "Embark on a thrilling 7-day Mountain Expedition, surrounded by breathtaking landscapes. Stay in cozy alpine chalets, challenge yourself with mountain climbing and zip-lining, and unwind under the stars during bonfire nights."
//   },
const tourSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    tourType: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    tripTitle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tourDetails: {
        duration: {
            type: String,
            required: true
        },
        accommodation: {
            type: String,
            required: true
        },
        activities: {
            type: Array,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    }
})

const Tours = new mongoose.model('Packges', tourSchema);

module.exports = Tours;
