import express from "express";
import mongoose from "mongoose";
import redis from "redis";

const app = express();
app.use(express.json());

const redisClient = redis.createClient({
    url: "redis://localhost:6379",
});

app.get("/redis", async (req, res) => {
    const reply = await redisClient.ping();
    res.json({ message: "Redis is connected", reply, status: "success" });
});


app.get("/mongo", async (req, res) => {
    const mongoUri = "mongodb://localhost:27017/redis_mongo_db";
    await mongoose.connect(mongoUri);
    res.json({ message: "MongoDB is connected", status: "success", database: mongoose.connection.name });
});

TTL = 3600; // 1 hour

const TASK_KEY = "app:task";

app.post("/task", async (req, res) => {
    const { task } = req.body;
    await redisClient.set(TASK_KEY, task);
    res.json({ message: "Task added", task, status: true });
});

app.get("/task", async (req, res) => {
    const task = await redisClient.get(TASK_KEY);
    res.json({ message: "Task retrieved", task, status: true });
});

app.get("/task/exists", async (req, res) => {
    const exists = await redisClient.exists(TASK_KEY);
    if (exists === 1) {
        const task = await redisClient.get(TASK_KEY);
        res.json({ message: "Task exists", task, exists: true, status: true });
    } else {
        res.json({ message: "Task does not exist", exists: false, status: true });
    }
});

app.delete("/task", async (req, res) => {
    const deletedCount = await redisClient.del(TASK_KEY);
    res.json({ message: "Task deleted", deletedCount, status: true });
});




app.listen(3000, async () => {
    await redisClient.connect();
    console.log("Server is running on port 3000");
});




