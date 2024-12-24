import ExcelData from "../Schema/ExcelShema";

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/excel_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const saveData = async (req,res) => {
    let reqBody=req.body;

  try {
    const excelData = new ExcelData();
    const result = await excelData.save();
    console.log("Data saved successfully:", result);
    mongoose.connection.close();
  } catch (error) {
    console.error("Error saving data:", error);
    mongoose.connection.close();
  }
};

saveData();
