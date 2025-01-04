import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.Config/db.config.js";
import morgan from "morgan";
import cors from "cors";
import Routes from './Router.js';


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
  

app.use('/api/v1', Routes);



app.get('/', (req, res) => {
  res.send("<h1>Welcome </h1>");
});

// app.get('/excelDa',getData)


const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});