
import mongoose from "mongoose";

const ElasticSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    warpSpandex:   {
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    warpYarnBase:  {
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    warpYarnSecond:  {
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    warpYarnThird:  {
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    spandexCovering:  {
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    spandexEnds:{
      type:Number,
      required: true,
    },
    yarnEnds:{
      type:Number,
      
    },
    weftYarn:{
      id:{
        type: mongoose.Types.ObjectId, 
        ref: "RawMaterial"
      },
      weight:{type:Number},
    },
    pick:{
      type:Number,
      required:true,
    },
    noOfHook:{
      type:Number,
      required:true
    },
    weight:{
      type:Number,
      required:true
    },
    customer: { type: mongoose.Types.ObjectId, ref: "Customer" },
    testingParameters:{
      width:{
        type:Number,
      },
      elongation:{ type:Number, required:true,default:120},
      recovery:{ type:Number, required:true,default:90},
      strain:{ type:String}
    },
    quantitySold:{ type:Number,default:0}

  },
  { timestamps: true }
);

const Elastic = mongoose.model("Elastic", ElasticSchema);
export default Elastic;