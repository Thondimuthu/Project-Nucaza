
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AddIcon, ThreeDotIcon, TimesheetsIcon } from '../../Icons/Icons.jsx';


function TimeSheet() {
    const [isShowPopup, setIsShowPopup] = useState(false);

    const handleTogglePopup = () => {
        setIsShowPopup(!isShowPopup);
    };

    // Array for popup options
    const popupOptions = [
    
    ];

    return (
        <div>
            <NavLink
                to="/timesheets"
                className="flex justify-between items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
                <div className="flex">
                    <TimesheetsIcon />
                    <span className="font-semibold ml-4">TimeSheets</span>
                </div>
                <div className="flex gap-4 pr-3 invisible group-hover:visible">
                    <ThreeDotIcon />
                    <button className="" onClick={handleTogglePopup}>
                        <AddIcon />
                    </button>
                </div>
            </NavLink>

            {isShowPopup && (
                <div className="absolute top-44 w-2/4 h-5/6 ml-36 mt-44  flex justify-center items-center shadow-">
                    <div className="bg-white w-4/5 h-3/4 p-5 rounded-lg relative ">
                        <div className="border border-t-0 border-l-0 border-r-0 flex justify-between items-center pb-3">
                            <span className='flex gap-2 items-center'>
                                <TimesheetsIcon />
                                <span className='font-bold'>TimeSheets</span>
                            </span>
                            <div className="flex items-center gap-6">
                                <button
                                    className=" rounded-lg w-14 h-10 "
                                    onClick={handleTogglePopup}
                                >
                                    X
                                </button>
                            </div>
                        </div>

                        <div className="m-2 border">
                            <div className="font-bold gap-3  m-5 ">
                                <input type="text" className='w-5/6 ml-10 h-12 rounded-xl border outline-none   ' /><br />
                                <div className='flex justify-between  border ml-10'> 
                                    <span className='text-center pl-10'>
                                        <input type="checkbox" className='mr-3 ' /><span >Select Task</span>
                                    </span>
                                    <input type="text" placeholder='Create' className=' border'/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                                onClick={handleTogglePopup}
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

export default TimeSheet;
