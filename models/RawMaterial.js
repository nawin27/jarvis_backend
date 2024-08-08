import mongoose from "mongoose";


const RawMaterialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    supplier: {
      type: String,
    },
    type: {
      type: String,
      required:true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category:{
      type:String,
      required:true,
    },
    purchases:[{
      type: mongoose.Types.ObjectId, 
      ref: "PurchaseOrder"
    }],
    AvgPriceInInventory:{
      type: Number,
    }
  },
  { timestamps: true }
);

const RawMaterial = mongoose.model("RawMaterial", RawMaterialSchema);
export default RawMaterial;