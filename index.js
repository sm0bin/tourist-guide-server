const express = require('express');
const mongoose = require('mongoose');
// const router = express.Router();
// const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5500;
const cors = require('cors');

const toursHandler = require('./routeHandler/toursHandler');
const bookingsHandler = require('./routeHandler/bookingsHandler');
const othersHandler = require('./routeHandler/othersHandler');
const guidesHandler = require('./routeHandler/guidesHandler');
const storiesHandler = require('./routeHandler/storiesHandler');
const touristsHandler = require('./routeHandler/touristsHandler');

// middleware
app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://tourist-guide-sm.web.app",
        "https://tourist-guide-sm.firebaseapp.com"
    ],
    credentials: true
}));
// const touristRouter = require('./routes/touristRouter');

// database connection
mongoose.connect(process.env.DB_URI)
    .then(() => { console.log("Connection successful.") })
    .catch((err) => { console.log(err) })


// application routes
app.use("/", othersHandler);
app.use("/tours", toursHandler);
app.use("/bookings", bookingsHandler);
app.use("/guides", guidesHandler);
app.use("/stories", storiesHandler);
app.use("/tourists", touristsHandler);


// default error handler
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        next(error);
    } else {
        res.status(500).json({ error: error });
    }
}

app.use(errorHandler);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})