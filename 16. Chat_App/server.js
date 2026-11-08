// const express = require("express")

import express from "express"
import { createServer } from "http";
import { Server as socketIo } from 'socket.io';
import cors from "cors"
import dotenv from "dotenv"
import chalk from 'chalk';
import jwt from "jsonwebtoken";
import {globalSocketIo} from "./core.js"
dotenv.config()

import connectDb from "./config/db.js"
import chatRoutes from "./routes/chat.routes.js"
import userRoutes from "./routes/user.routes.js"


const app = express()
const PORT = process.env.PORT || 8000

app.use(express.static("public"))

// THIS IS THE ACTUAL SERVER WHICH IS RUNNING
const server = createServer(app);

// handing over server access to socket.io
const io = new socketIo(server, 
    { cors: { origin: "*" } }
);
globalSocketIo.io = io; // assigning the socket.io instance to global variable

io.use((socket, next) => {
  const token = socket.handshake.auth?.token;
  if (typeof token !== "string") {
    return next(new Error("Authentication required"));
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
    if (error) {
      return next(error);
    }

    if (typeof decoded === "string" || !decoded?._id) {
      return next(new Error("Invalid authentication token"));
    }

    socket.data.userId = String(decoded._id);
    next();
  });
});

// ------- server-side connection events ----------- //

io.on("connection", (socket) => {
  console.log("New client connected with id: ", socket.id);
  socket.join(`user:${socket.data.userId}`);
  socket.on("disconnect", (reason) => {
    console.log("Client disconnected with id: ", socket.id, reason);
  });
});

connectDb()

app.use(express.json())

app.use(cors())

app.use("/api", chatRoutes)
app.use("/api", userRoutes)


server.listen(PORT, () => {
    console.log(chalk.blue(`web Server is running on port ${PORT}`));
    
})
