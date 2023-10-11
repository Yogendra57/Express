import express from "express";
import doctorschema from "../models/doctorSchema.js"; // Import the 'doctorschema' model


const router = express.Router();

// Define a route to handle adding a new Doctor
router.post("/addDoctor", async (req, res) => {
  try {
    // Create a new Doctor based on the request body
    const newDoctor = new doctorschema(req.body);

    // Save the new Doctor to the database
    await newDoctor.save();

    // Respond with a success message
    res.status(201).json({ message: "Doctor added successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
});
router.get("/getdoctor", async (req, res) => {
  try {
    // Query the database to retrieve all Doctors
    const Doctors = await doctorschema.find();

    // Respond with the list of Doctors
    res.status(200).json(Doctors);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
});
export default router;