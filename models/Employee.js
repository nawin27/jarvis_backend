import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    state: {
      type: String,
      required: true,
      default:"Tamil Nadu"
    },
    aadhar:{
      type: String,
      required: true,
    },
    phoneNumber: {
      type:Number,
    },
    skill:{
        type: Number,
        required: true,
        default:0,
    },
    salary: {
        type: Number,
        required: true,
        default:15000
    },
    role:{
      type: String,
    },
    Department: {
      type: String,
      required: true,
      default:"Genral"
    },
    performance:{
      type: Number,
      default:null
    }
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;