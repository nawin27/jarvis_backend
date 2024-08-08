import mongoose from "mongoose";

const ProductionSchema = new mongoose.Schema(
  {
    Date: {
      type:String,
      required: true
    },
    Machine: {
      type:mongoose.Types.ObjectId,
      ref:"Machine", 
      required: true
    },
    Order: {
      type:mongoose.Types.ObjectId,
      ref:"Order",
      required: true
    },
    Employee: {
      type:mongoose.Types.ObjectId,
      ref:"Employee",
      required: true
    },
    production:{
      type:Number,
      required: true
    },
    shift:{
      type:String,
      required: true
    }

  },
  { timestamps: true }
);

const Production = mongoose.model("Production", ProductionSchema);
export default Production;