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
    thumbnail: {
        type: String,
        required: true
    },
    gallery: {
        type: Array,
        required: false
    },
    tourType: {
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
        type: Object,
        required: true,
        duration: {
            type: String,
            required: true
        },
        accommodation: {
            type: String,
            required: true
        },
        days: {
            type: Array,
            required: false

        }
    },
    description: {
        type: String,
        required: true
    }
})

const Tours = new mongoose.model('Packges', tourSchema);

module.exports = Tours;

// {
//     "thumbnail": "https://source.unsplash.com/DWoOJ2C2uns/640x360",
//     "gallery": [
//       "https://source.unsplash.com/_jxz7Fe1btc",
//       "https://source.unsplash.com/k7EDYStENI0",
//       "https://source.unsplash.com/WICc--aTNt8",
//       "https://source.unsplash.com/Cdwi5n7Gwes",
//       "https://source.unsplash.com/RfHhohVQLnQ"
//     ],
//     "tourType": "Historical",
//     "tripTitle": "Ancient Castle Exploration",
//     "price": 200,
//     "tourDetails": {
//       "duration": "8 days",
//       "accommodation": "Castle Suites",
//       "days": [
//         {
//           "day": 1,
//           "title": "Castle Arrival and Welcome Banquet",
//           "details": "Arrive at the majestic castle and be welcomed with a grand banquet. Explore the castle grounds, admiring the medieval architecture and scenic surroundings."
//         },
//         {
//           "day": 2,
//           "title": "Guided Castle Tours",
//           "details": "Embark on guided tours of the ancient castle, uncovering its rich history and stories of the past. Visit historic chambers, halls, and courtyards, marveling at the preserved artifacts and tapestries."
//         },
//         {
//           "day": 3,
//           "title": "Medieval Banquets and Festivities",
//           "details": "Indulge in medieval banquets and festivities within the castle walls. Experience the grandeur of medieval entertainment, including music, dance, and theatrical performances."
//         },
//         {
//           "day": 4,
//           "title": "Archery and Castle Grounds Exploration",
//           "details": "Try your hand at archery in the castle grounds, channeling the spirit of medieval knights. Explore the expansive castle grounds, discovering hidden gardens and scenic viewpoints."
//         },
//         {
//           "day": 5,
//           "title": "Village Excursion and Local Interactions",
//           "details": "Embark on an excursion to nearby villages, interacting with local communities and experiencing rural life. Learn about traditional crafts and customs, gaining insights into the cultural heritage of the region."
//         }
//       ]
//     },
//     "description": "Step back in time with an 8-day Ancient Castle Exploration. Stay in luxurious castle suites, explore ancient castles with guided tours, savor medieval banquets, and try your hand at archery in the castle grounds."
//   },
