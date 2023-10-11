import mongoose from "mongoose";
import data from "./dataSchema.js";
import connectDB from "../connection/db.js";

const createDocument = async () => {
  try {
    // Connect to the database
    await connectDB();

    const newItem = new data({
    id:1,
    DateOfAppointment:"04-11-23",
    Time:12,
    DoctorName:"Pradeep",
    PatientName:"Manjeet",
    PhoneNo:9829363849,
    Address:"Jaipur",
  
    });

    const result = await newItem.save();
    console.log("Document saved successfully:", result);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};
createDocument()