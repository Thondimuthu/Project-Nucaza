import mongoose, { Schema } from "mongoose";

// Define the schema
const ExcelSchema = new Schema({
    sheetName: {
        type: String,
        required: true
    },
    columns: {
        type: [String],
        required: true
    },
    rows: [{
        type: Map,
        of: String
    }],
    importedAt: {
        type: Date,
        default: Date.now
    },
    importedBy: {
        type: String,
        required: true
    }
});

// Create the model
const ExcelModel = mongoose.model('excel', ExcelSchema);

export default ExcelModel;  


