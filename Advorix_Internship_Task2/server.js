const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const connectDB = require("./backend/config/db");

dotenv.config({ path: path.resolve(__dirname, './.env') });
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./backend/routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Task2 Auth API Working ✅");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth Server running on port ${PORT}`));
