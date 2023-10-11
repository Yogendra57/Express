import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  id: Number,
  DoctorName: String,
  PatientName: String,
  Contact: Number,
  Address: String,
  Appointment: String,
  Specialisation: String,
  images: [String],
});

const doctorschema = mongoose.model("doctorschema", doctorSchema);

export default doctorschema;
