import express from "express";
// import colors from "colors/index.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import connectDB from "./connection/db.js"; // Import the database connection function
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";



const app = express();
dotenv.config();

//PORT
const PORT = process.env.PORT || 8080;

// Establish the MongoDB connection
connectDB();

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// // Use the product routes
app.use("/doctors", doctorRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to express",
  });
});


// Start the Express server
app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on ${PORT}`
 );
});