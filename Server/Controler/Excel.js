import mongoose from 'mongoose';
import excelSchema from '../Schema/ExlSchema.js';


export async function saveData(req, res) {
    const data = req.body.data;
    // Process the data and save it to the database (e.g., MongoDB)
    console.log(data);
    res.status(200).send({ message: 'Data saved successfully' });
};
