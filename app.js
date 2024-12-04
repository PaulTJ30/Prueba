import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import { test } from "./api/controllers/FunkoController.js"

dotenv.config()
mongoose.connect(process.env.url)

    .then(() => {
        console.log("Si jala")
    })
    .catch((error) => {
        console.log("No jalo", error)
    })

const app = express
app.use(cors)

app.listen(4000() => {
    console.log("Se escucha")
})

test()






