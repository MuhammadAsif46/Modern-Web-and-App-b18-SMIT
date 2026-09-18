// const express = require("express")

import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import productRoutes from "./routes/product.js"
import connectDb from "./config/db.js"


const app = express()
const PORT = process.env.PORT || 5000


connectDb()

app.use(express.json())

app.use(cors())

// app.use("/", (req, res, next) => {
//     // console.log(req.query.apiKey);
//     if (req.query.apiKey === '999') {
//         console.log("middleware...");
//         next()
//     } else {
//         res.status(401).send({ status: 401, message: "Unauthorized Person" })
//     }
// })

app.use('/api', userRoutes)
app.use('/api', authRoutes)
app.use('/api', productRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
