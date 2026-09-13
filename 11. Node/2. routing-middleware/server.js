// const express = require("express")

import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.js"
import productRoutes from "./routes/product.js"


const app = express()
const PORT = 5000

app.use(express.json())

app.use(cors())

app.use("/", (req, res, next) => {
    // console.log(req.query.apiKey);
    if (req.query.apiKey === '999') {
        console.log("middleware...");
        next()
    } else {
        res.status(401).send({ status: 401, message: "Unauthorized Person" })
    }
})

app.use('/api', userRoutes)
app.use('/api', productRoutes)

// app.get('/', (req, res) => {
//     res.send("Welcome to my Application")
// })

// app.get('/users', (req, res) => {
//     res.send(users)
// })

// app.post("/user", (req, res) => {
//     // console.log("req-->", req.body);
//     try {
//         const { name, email } = req.body
//         if (name.trim() && email.trim()) {
//             users.push({ id: users.length + 1, ...req.body })
//             return res.status(200).send({ status: 200, message: "User Added Successfully" })
//         } else {
//             return res.status(403).send({ status: 403, message: "Email & Name is required" })
//         }
//     } catch (err) {
//         return res.status(500).send({ status: 500, message: "Internal Server Error" })
//     }
// })

// app.delete("/user/:id", (req, res) => {
//     // console.log(req.params.id);
//     const userId = Number(req.params.id)
//     const userIndex = users.findIndex(v => v.id === userId)
//     users.splice(userIndex, 1)
//     res.send({ message: "User Delete Successfully" })
// })


// app.put("/user/:id", (req, res) => {
//     const userId = Number(req.params.id)
//     const userIndex = users.findIndex(v => v.id === userId)
//     users.splice(userIndex, 1, { id: userId, ...req.body })
//     res.send({ message: "User Update Successfully" })
// })

// app.post("/order", (req, res) => {
//     console.log(req.body);
//     res.send({ message: "Order Placed Successfully" })
// })


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
