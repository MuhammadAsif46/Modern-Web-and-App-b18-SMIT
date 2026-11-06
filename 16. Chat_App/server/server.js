// const express = require("express")

import express from "express"
import { createServer } from "http";
import { Server as socketIo } from 'socket.io';
import cors from "cors"
import dotenv from "dotenv"
import chalk from 'chalk';
dotenv.config()

import connectDb from "./config/db.js"
import chatRoutes from "./routes/chat.routes.js"
import userRoutes from "./routes/user.routes.js"


const app = express()
const PORT = process.env.PORT || 5000

// THIS IS THE ACTUAL SERVER WHICH IS RUNNING
const server = createServer(app);

// handing over server access to socket.io
const io = new socketIo(server, 
    { cors: { origin: "*" } }
);


// ------- server-side connection events ----------- //

io.on("connection", (socket) => {
  console.log("New client connected with id: ", socket.id);
});

io.on("disconnect", (message) => {
  console.log("Client disconnected with id: ", message);
});

connectDb()

app.use(express.json())

app.use(cors())

app.use("/api", chatRoutes)
app.use("/api", userRoutes)


server.listen(PORT, () => {
    console.log(chalk.blue(`web Server is running on port ${PORT}`));
    
})
