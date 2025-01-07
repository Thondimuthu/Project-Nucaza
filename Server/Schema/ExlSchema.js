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
        of: String,
        required: true
    }],
    importedAt: {
        type: Date,
        default: Date.now
    },
    importedBy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Create the model
const ExcelModel = mongoose.model('Excel', ExcelSchema);

export default ExcelModel;
