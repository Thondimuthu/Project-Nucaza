import { useState } from 'react';
import { AddIcon, ThreeDotIcon, WhiteboardIcon } from '../../Icons/Icons';
import { NavLink } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { TfiImport } from 'react-icons/tfi';

function XLPopup() {
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [excelData, setExcelData] = useState({});
    const [newColumnTitle, setNewColumnTitle] = useState('');
    const [selectedSheet, setSelectedSheet] = useState('');
    const [newSheetName, setNewSheetName] = useState('');
    const [showSheetInput, setShowSheetInput] = useState(false);

    const handleTogglePopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const arrayBuffer = event.target.result;
                    const wb = XLSX.read(arrayBuffer, { type: 'array' });

                    if (wb.SheetNames.length === 0) {
                        throw new Error('No sheets found in the Excel file');
                    }

                    const sheetsData = wb.SheetNames.reduce((acc, sheetName) => {
                        const ws = wb.Sheets[sheetName];
                        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
                        
                        // Ensure each row has the same number of columns
                        const maxColumns = Math.max(...data.map(row => row.length));
                        const normalizedData = data.map(row => {
                            while (row.length < maxColumns) {
                                row.push('');
                            }
                            return row;
                        });
                        
                        acc[sheetName] = normalizedData;
                        return acc;
                    }, {});

                    setExcelData(sheetsData);
                    setSelectedSheet(wb.SheetNames[0]);
                } catch (error) {
                    console.error('Error processing Excel file:', error);
                    alert('Error processing Excel file. Please check the file format.');
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleCellChange = (e, rowIndex, colIndex) => {
        if (!selectedSheet) return;
        
        const updatedData = { ...excelData };
        if (!updatedData[selectedSheet][rowIndex]) {
            updatedData[selectedSheet][rowIndex] = [];
        }
        updatedData[selectedSheet][rowIndex][colIndex] = e.target.value;
        setExcelData(updatedData);
    };

    const handleAddRow = () => {
        if (!selectedSheet || !excelData[selectedSheet]) {
            alert('Please select a sheet first');
            return;
        }

        const updatedData = { ...excelData };
        const sheetData = updatedData[selectedSheet];
        const columnCount = sheetData[0]?.length || 1;
        const newRow = new Array(columnCount).fill('');
        newRow[0] = sheetData.length;
        sheetData.push(newRow);
        setExcelData(updatedData);
    };

    const handleAddColumn = () => {
        if (!selectedSheet) {
            alert('Please select a sheet first');
            return;
        }

        if (newColumnTitle.trim() === '') {
            alert('Column title cannot be empty!');
            return;
        }

        const updatedData = { ...excelData };
        const sheetData = updatedData[selectedSheet];

        if (!sheetData || !sheetData[0]) {
            updatedData[selectedSheet] = [[newColumnTitle]];
        } else {
            sheetData[0].push(newColumnTitle);
            for (let i = 1; i < sheetData.length; i++) {
                sheetData[i].push('');
            }
        }

        setExcelData(updatedData);
        setNewColumnTitle('');
    };

    const handleAddSheet = () => {
        if (!newSheetName.trim()) {
            alert('Sheet name cannot be empty!');
            return;
        }

        if (excelData[newSheetName]) {
            alert('A sheet with this name already exists!');
            return;
        }

        const newSheetData = [['Sl. No.']];
        setExcelData({
            ...excelData,
            [newSheetName]: newSheetData,
        });
        setSelectedSheet(newSheetName);
        setNewSheetName('');
        setShowSheetInput(false);
    };

    const exportToExcel = () => {
        if (Object.keys(excelData).length === 0) {
            alert('No data to export');
            return;
        }

        try {
            const wb = XLSX.utils.book_new();
            Object.keys(excelData).forEach((sheetName) => {
                const ws = XLSX.utils.aoa_to_sheet(excelData[sheetName]);
                XLSX.utils.book_append_sheet(wb, ws, sheetName);
            });
            XLSX.writeFile(wb, 'exported_data.xlsx');
        } catch (error) {
            console.error('Error exporting to Excel:', error);
            alert('Failed to export Excel file');
        }
    };

    const renderTable = () => {
        if (!selectedSheet || !excelData[selectedSheet]) {
            return <div>No data to display</div>;
        }

        const data = excelData[selectedSheet];
        return (
            <div className="overflow-y-scroll h-40 border border-red-500 mt-3">
                <table className="border-collapse w-full">
                    <thead>
                        <tr className="border">
                            {data[0] &&
                                data[0].map((col, index) => (
                                    <th key={index} className="border px-4 py-2 text-left">
                                        {col}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="border border-red-500">
                        {data.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={`${rowIndex}-${cellIndex}`}
                                        className="border px-1"
                                    >
                                        <input
                                            type="text"
                                            value={cell || ''}
                                            onChange={(e) => handleCellChange(e, rowIndex + 1, cellIndex)}
                                            className="w-full text-xl p-2 rounded-md outline-none"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const handleDeleteSelectedSheet = () => {
        if (!selectedSheet) {
            alert('No sheet selected!');
            return;
        }

        if (Object.keys(excelData).length === 1) {
            alert('Cannot delete the last sheet');
            return;
        }

        const updatedData = { ...excelData };
        delete updatedData[selectedSheet];

        const remainingSheets = Object.keys(updatedData);
        setSelectedSheet(remainingSheets[0] || '');
        setExcelData(updatedData);
    };

    const handleSave = async () => {
        if (Object.keys(excelData).length === 0) {
            alert('No data to save');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/v1/excelData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: excelData
                })
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            const result = await response.json();
            console.log(result);
            
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Failed to save data. Please try again.');
        }
    };

    return (
        <div>
            <NavLink
                to="/xlsheets"
                className="flex justify-between items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
                <div className="flex">
                    <WhiteboardIcon />
                    <span className="font-semibold ml-4">XL Sheets</span>
                </div>
                <div className="flex gap-4 pr-3 invisible group-hover:visible">
                    <ThreeDotIcon />
                    <button onClick={handleTogglePopup}>
                        <AddIcon />
                    </button>
                </div>
            </NavLink>

            {isShowPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-5/6 p-5 rounded-lg shadow-lg relative">
                        <div className="border-b flex justify-between items-center pb-3">
                            <span className="flex gap-2 items-center">
                                <WhiteboardIcon />
                                <span className="font-bold">XL Sheets</span>
                            </span>
                            <button
                                className="border rounded-lg w-14 h-10 text-gray-600 text-lg hover:bg-red-600 hover:text-white"
                                onClick={handleTogglePopup}
                            >
                                X
                            </button>
                        </div>

                        <div>
                            <div className="p-3">
                                <div className="flex justify-between p-2">
                                    <div className="text-center">
                                        <label className="text-sm">
                                            <p>Upload Excel File</p>
                                            <p>Supported formats: .xlsx, .xls</p>
                                        </label>
                                        <input
                                            type="file"
                                            accept=".xlsx,.xls"
                                            onChange={handleFileUpload}
                                            className="border-gray-300 rounded-md pl-14 pt-3"
                                        />
                                    </div>
                                    <div className="text-center mr-10">
                                        <button
                                            onClick={() => setShowSheetInput(!showSheetInput)}
                                            className="bg-purple-500 text-white py-1 px-4 rounded-md hover:bg-purple-600"
                                        >
                                            {showSheetInput ? 'Cancel' : 'Add New Sheet'}
                                        </button>

                                        {showSheetInput && (
                                            <div className="mt-4 flex justify-center gap-4">
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={newSheetName}
                                                        onChange={(e) => setNewSheetName(e.target.value)}
                                                        placeholder="Enter new sheet name"
                                                        className="pl-4 text-lg h-10 border border-gray-300 rounded-md outline-none border-b-2 border-t-0 border-r-0"
                                                    />
                                                </div>
                                                <div className="pt-1">
                                                    <button
                                                        onClick={handleAddSheet}
                                                        className="bg-orange-500 py-1 px-4 text-white rounded-md hover:bg-orange-600"
                                                    >
                                                        Add Sheet
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-3 flex justify-between">
                                    <div className="p-2">
                                        <button
                                            onClick={handleDeleteSelectedSheet}
                                            className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                                        >
                                            Delete Sheet
                                        </button>
                                    </div>

                                    <div className="p-2">
                                        <input
                                            type="text"
                                            value={newColumnTitle}
                                            onChange={(e) => setNewColumnTitle(e.target.value)}
                                            placeholder="Enter new column title"
                                            className="p-1 text-lg border border-gray-300 rounded-md mr-5 border-b-2 border-t-0 border-r-0"
                                        />
                                        <button
                                            onClick={handleAddColumn}
                                            className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 mr-5"
                                        >
                                            Add Column
                                        </button>
                                        <button
                                            onClick={handleAddRow}
                                            className="bg-blue-500 text-white py-1 px-5 rounded-md hover:bg-blue-600"
                                        >
                                            Add Row
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-center mt-2 gap-4">
                                    {Object.keys(excelData).map((sheetName) => (
                                        <button
                                            key={sheetName}
                                            onClick={() => setSelectedSheet(sheetName)}
                                            className={`p-2 hover:border-gray-900 hover:shadow-md rounded-md border-x-1 ${
                                                selectedSheet === sheetName
                                                    ? 'bg-gray-400 text-slate-50 text-xl'
                                                    : 'bg-white text-md'
                                            }`}
                                        >
                                            {sheetName}
                                        </button>
                                    ))}
                                </div>

                                <div>
                                    {renderTable()}
                                </div>

                                <div className="flex justify-between gap-6 mt-4 border">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-500 flex gap-2 text-white py-2 px-6 rounded-md hover:bg-green-600"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={exportToExcel}
                                        className="bg-green-500 flex gap-2 text-white py-2 px-6 rounded-md hover:bg-green-600"
                                    >
                                        Download Excel Sheet
                                        <TfiImport className="mt-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default XLPopup;
