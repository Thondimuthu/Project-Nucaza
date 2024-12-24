import { Schema, Schema,model } from "mongoose";


        //Define the schema
    const Schema=new Schema({
        "Sheet_Name":{
            type:String,
            require:true
        },
        column:{
            type:[String],
            require:true
        },
        row:[
            {
                type:Map,
                of:String
            },
        ],
        imported_at: {
                type: Date,
                default: Date.now,
              },
              imported_by: {
                type: String,
                required: true,
              },
    })
    // Create the model
const ExcelData = mongoose.model('ExcelData', ExcelSchema);

export default ExcelData

// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// // Define the schema
// const ExcelSchema = new Schema({
//   sheet_name: {
//     type: String,
//     required: true,
//   },
//   columns: {
//     type: [String], // Array of column names
//     required: true,
//   },
//   rows: [
//     {
//       type: Map, // Dynamic object with column-value mapping
//       of: String,
//     },
//   ],
//   imported_at: {
//     type: Date,
//     default: Date.now,
//   },
//   imported_by: {
//     type: String,
//     required: true,
//   },
// });

 // Create the model
// const ExcelData = mongoose.model('ExcelData', ExcelSchema);

// module.exports = ExcelData;
