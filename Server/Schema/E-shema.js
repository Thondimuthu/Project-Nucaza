import mongoose, { model, Schema } from "mongoose";

            // Define the schema
const UserSchema = new Schema({
    Sheet_Name: {
        type: String,
        required: true, 
    },
    column: {
        type: [String],
        required: true, 
    },
    row: [
        {
            type: Map,
            of: String,
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
});

                    // Create the model
const excelSchema = model('ExlData', UserSchema);

export default excelSchema;
