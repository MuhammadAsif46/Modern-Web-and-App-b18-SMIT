import express from 'express';
import { connectDB } from './config/db.js';
import User from './models/user.js';

const app = express();


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

connectDB();

// READ: Get all students
app.get("/", async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json({
      data: users,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      status: 500,
    });
  }
});



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});