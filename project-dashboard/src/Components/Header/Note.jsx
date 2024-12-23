import React, { useState } from 'react';
import { Notepen } from '../../Icons/Icons';

function Note() {
    const [open, setOpen] = useState(false); // State to toggle the popup

    const togglePopup = () => {
        setOpen((prevOpen) => !prevOpen); // Toggle the popup
    };

    // Example popup options (replace with actual data if needed)
    const popupOptions = [
        {  label: "Option 1" },
        {  label: "Option 2" },
        {  label: "Option 3" },
        {  label: "Option 4" },
        {  label: "Option 5" },
    ];
    


    return (
        <div className="relative inline-block text-left z-50">
            <button
                type="button"
                className="h-10 w-10"
                onClick={togglePopup} // Toggle the popup on button click
            >
                <Notepen />
            </button>

            {open && ( // Conditionally render the popup
                <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-slate-200 w-3/5 h-3/4 p-5 rounded-lg shadow-lg relative">
                        {/* Popup Header */}
                        <div className="border-b flex justify-between items-center p-3">
                            <span className="flex gap-2 items-center border ">
                                <span className=' from-neutral-950'><Notepen/></span>
                                
                                <span className="font-bold text-xl">Note</span>
                            </span>
                            <button
                                className="border rounded-lg w-14 h-10 text-gray-600 text-lg hover:bg-red-600 hover:text-white"
                                onClick={togglePopup} // Close the popup
                            >
                                X
                            </button>
                        </div>

                        {/* Popup Content */}
                        <div className=" border border-gray-500 border-l-0 border-r-0 border-b-0">
                            <div className="font-bold flex gap-3 justify-end mr-10 mt-3">
                                {popupOptions.map((option, index) => (
                                    <div key={index} className="flex items-center gap-1">
                                        {option.icon}
                                        <span>{option.label}</span>
                                    </div>
                                ))}
                            </div>
                            <input type="text" className='outline-none  ml-7 mt-2 w-11/12 h-80' />
                            
                        </div>

                        {/* Popup Footer */}
                        <div className="flex justify-end mt-3">
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                                onClick={togglePopup} // Save and close the popup
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Note;
