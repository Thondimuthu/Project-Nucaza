import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.Config/db.config.js";
import morgan from "morgan";
import cors from "cors";
import Routes from './Router.js';

// Configure environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Add logging middleware since morgan is imported

// Routes
app.use('/api/v1', Routes);

app.get('/', (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});

const PORT = process.env.PORT || 8081;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});