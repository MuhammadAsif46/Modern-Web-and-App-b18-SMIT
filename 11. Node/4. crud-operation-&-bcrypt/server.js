// const express = require("express")

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import connectDb from "./config/db.js"
import postRouter from "./routes/post.route.js"
import authRouter from "./routes/auth.route.js"


const app = express()
const PORT = process.env.PORT || 5000


connectDb()

app.use(express.json())

app.use(cors())

app.use("/api", postRouter)
app.use("/api", authRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
