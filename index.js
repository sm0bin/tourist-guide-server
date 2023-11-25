const express = require('express');
const mongoose = require('mongoose');
// const router = express.Router();
// const dotenv = require('dotenv');
const app = express();
app.use(express.json())
const port = process.env.PORT || 5500;
require('dotenv').config();
const cors = require('cors');
app.use(cors());
// const touristRouter = require('./routes/touristRouter');
const tourHandler = require('./routeHandler/tourHandler');

// database connection
const uri = process.env.DB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Connection successful.") })
    .catch((err) => { console.log(err) })


// application routes
app.use("/tour", tourHandler);

// default error handler
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        next(err);
    } else {
        res.status(500).json({ error: err });
    }
}

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send("Tourist Guide Server is running...");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})