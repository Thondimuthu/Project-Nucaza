import mongoose from "mongoose";

// Define the schema
const ExcelSchema = new mongoose.Schema({
    sheetName: {
        type: String,
        required: true
  
    },
    columns: {
        
        type: [String],
        required: true,
  
    },
    rows: [{
        type: Map,
        of: String,
       required: true
    }],
    importedAt: {
        type: Date,
        default: Date.now
    },
    importedBy: {
        type: String,

    }
}, {
    timestamps: true
});


const ExcelModel = mongoose.model('Excel', ExcelSchema);

export default ExcelModel;
