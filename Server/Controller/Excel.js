import mongoose from 'mongoose';
import ExcelModel from '../Schema/ExlSchema.js';


export async function saveData(req, res) {
    try {
        
        const newExcelModel = new excel(req.body)   

        // Save to database
        await newExcelModel.save();

        res.status(200).send({ 
            success: true,
            message: 'Data saved successfully',
            data: newExcelModel 
        });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send({
            success: false,
            message: 'Error saving data',
            error: error.message
        });
    }
}

export async function getData(req, res) {
    try {
        const data = await excelSchema.find();
        console.log(data,'data');
        res.status(200).send({
            success: true,
            data: data
        });
        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({
            success: false,
            message: 'Error fetching data',
            error: error.message
        });
    }
}
