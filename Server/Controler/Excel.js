import mongoose from 'mongoose';
import excelSchema from '../Schema/ExlSchema.js';

export async function saveData(req, res) {
    try {
        const { sheetName, columns, rows, importedBy } = req.body.data;

        // Create new Excel document
        const newExcelData = new excelSchema({
            sheetName,
            columns,
            rows,
            importedBy
        });

        // Save to database
        await newExcelData.save();

        res.status(200).send({ 
            success: true,
            message: 'Data saved successfully',
            data: newExcelData 
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
