import mongoose from "mongoose";

const ShiftDetailSchema = new mongoose.Schema( {
       date: {
        type: Date,
        required: true,
      },
      shift:{
        type: String,
        required: true,
      },
      description:{
        type: String,
      },
      feedback:{
        type: String,
        default:"nl"
      },
      production:{
        type: Number,
        required: true,
        default: 0,
      },
      employee: { type: mongoose.Types.ObjectId, ref: "Employee" },
      job: { type: mongoose.Types.ObjectId, ref: "JobOrder" },
      machine: { type: mongoose.Types.ObjectId, ref: "Machine" },
      stage: { type: String, required: true },
    })

    const ShiftDetail = mongoose.model("ShiftDetails", ShiftDetailSchema);
    export default ShiftDetail;
    