require("dotenv").config();
const mongoose = require("mongoose")
mongoose.set('debug', true)

/** Local DB COnnection mongoose */

/** "tatvasot is the DB Name" */
const connection = mongoose.connection(
    'mongodb://127.0.0:27017/tatvasoft',
    {
        useNewUrlParser: true,
        useUnifiedTopologu: true,
        useFindAndModify: true,
        userCreateIndex: true
    },
    () => {
        /** Connection Okay */
        console.log("Connection Okay")

        /** If need any seed then */
        // seed()
    }
)

async function seed(){
    require('../models/seeders')
}

module.exports = connection