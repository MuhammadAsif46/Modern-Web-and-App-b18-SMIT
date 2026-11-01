require("dotenv").config();

const express = require("express");

const emailRoutes = require("./routes/email.routes");

const app = express();

app.use(express.json());

app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});