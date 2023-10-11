import mongoose from "mongoose"; 
const {Schema}=moongoose;
const dataSchema = new mongoose.Schema({
    id:Number,
    DateOfAppointment:String,
    Time:Number,
    DoctorName:String,
    PatientName:String,
    PhoneNo:Number,
    Address:String,
    
});

const data = mongoose.model("data", dataSchema);

export default data;