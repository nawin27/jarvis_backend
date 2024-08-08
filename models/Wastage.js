import mongoose from "mongoose";

const WastageSchema = new mongoose.Schema(
  {
    Date: {
      type:String,
      required: true
    },
    Machine: {
      type:mongoose.Types.ObjectId,
      required: true
    },
    Order: {
      type:mongoose.Types.ObjectId,
      required: true
    },
    Employee: {
      type:mongoose.Types.ObjectId,
      required: true
    },
    Wastage:{
      type:Number,
      required: true
    },
    shift:{
      type:String,
      required: true
    },
    Reason:{
      type:String,
      required: true
    }

  },
  { timestamps: true }
);

const Wastage = mongoose.model("Wastage", WastageSchema);
export default Wastage;