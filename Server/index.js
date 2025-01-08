import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.Config/db.config.js";
import cors from "cors";
import router from "./Router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8081;
const DbURL = process.env.DBurl;

// Middleware
app.use(cors());
app.use(express.json()); // Ensure JSON parsing middleware is added

// Routes
app.get('/', (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

app.use('/api/v1', router);

// Database Connection and Server Start
const startServer = async () => {
  try {
    await connectDB(DbURL);
    app.listen(PORT, () => {
      console.log(`connecting to http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

