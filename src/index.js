// require('dotenv').config({path: './env'}); // inconsistency of code
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

const app = express();

connectDB();

/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Application not able to talk to database: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.port}`);
        })
    } catch(error) {
        console.error("ERROR: ", error);
        throw error
    }
})() 
*/

app.listen(process.env.PORT, () => {
    console.log(`Localhost listening at port ${process.env.PORT}`)
})