import mongoose from "mongoose";


const MachineSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    manufacturer: {
      type: String,
      required: true,

    },
    DateOfPurchase: {
      type: Date,
    },
    NoOfHead:{
      type: Number,
      required: true,
    },
    NoOfHealds: {
      type: Number,
      required: true,
    },
    NoOfHooks:{
      type: Number,
      required: true,
    },
    orderRunning: {
      type:mongoose.Types.ObjectId,
      ref:"JobOrder",
      default:null
    },
  },
  { timestamps: true }
);

const Machine = mongoose.model("Machine", MachineSchema);
export default Machine;