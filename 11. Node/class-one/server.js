// const express = require("express")

import express from "express"
import cors from "cors"


const app = express()
const PORT = 5000

app.use(express.json())

app.use(cors())

const users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@gmail.com"
    }
]


app.get('/', (req, res) => {
    res.send("Welcome to my Application")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post("/user", (req, res) => {
    // console.log("req-->", req.body);
    users.push({ id: users.length + 1, ...req.body })
    res.send({ message: "User Added Successfully" })
})

app.delete("/user/:id", (req, res) => {
    // console.log(req.params.id);
    const userId = Number(req.params.id)
    const userIndex = users.findIndex(v => v.id === userId)
    users.splice(userIndex, 1)
    res.send({ message: "User Delete Successfully" })
})


app.put("/user/:id", (req, res) => {
    const userId = Number(req.params.id)
    const userIndex = users.findIndex(v => v.id === userId)
    users.splice(userIndex, 1, { id: userId, ...req.body })
    res.send({ message: "User Update Successfully" })
})

app.post("/order", (req, res) => {
    console.log(req.body);
    res.send({ message: "Order Placed Successfully" })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
