const mongoose = require('mongoose');

// {
//     "name": "Emily Davis",
//     "profilePicture": "https://source.unsplash.com/JgXxNIHotZ8/512x512",
//     "contactDetails": {
//       "email": "emily.davis@email.com",
//       "phone": "+1 (555) 111-2233",
//       "location": "Rajshahi, Bangladesh"
//     },
//     "education": "Certification in Cultural Heritage Tourism",
//     "skills": [
//       "Local Cuisine Expertise",
//       "Group Management",
//       "Language Proficiency"
//     ],
//     "workExperience": [
//       {
//         "position": "Cultural Guide",
//         "company": "Heritage Explorations",
//         "duration": "2015 - Present"
//       },
//       {
//         "position": "Tour Coordinator",
//         "company": "Cultural Connections",
//         "duration": "2012 - 2015"
//       }
//     ],
//     "rating": 4.7
//   },

const tourGuideSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    contactDetails: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    education: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    workExperience: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const TourGuides = new mongoose.model('Guides', tourGuideSchema);

module.exports = TourGuides;