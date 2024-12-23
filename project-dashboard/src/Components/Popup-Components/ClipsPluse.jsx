
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AddIcon, ClipIcon, ThreeDotIcon } from '../../Icons/Icons.jsx';
import { MicOff, System } from '../../Icons/ClipsIcos.jsx';

function DacsPluse() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setIsShowPopup(!isShowPopup);
  };

  // Array for popup options
  const popupOptions = [
    { icon: <MicOff />, label: 'No Microphone' },
    { icon: <System />, label: 'Full Screen' },
    
  ];

  return (
    <div>
      <NavLink
        to="/clips"
        className="flex justify-between items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
      >
        <div className="flex">
          <ClipIcon />
          <span className="font-semibold ml-4">Clips</span>
        </div>
        <div className="flex gap-4 pr-3 invisible group-hover:visible">
          <ThreeDotIcon />
          <button className="" onClick={handleTogglePopup}>
            <AddIcon />
          </button>
        </div>
      </NavLink>

      {isShowPopup && (
        <div className="fixed w-full ml-60  ">
          <div className="bg-white w-1/3 h-72 p-5 rounded-lg shadow-lg relative">
            <div className="border border-t-0 border-l-0 border-r-0 flex justify-between items-center p-3">
            <span className='flex gap-2 items-center'>
                <ClipIcon />
                <span className='font-bold'>Video Clips</span>
              </span>
              <div className="flex items-center gap-6">
                <button
                  className=" rounded-lg w-14 h-10 text-gray-600 text-lg  "
                  onClick={handleTogglePopup}
                >
                  X
                </button>
              </div>
            </div>
            <div className="m-5">
              <div className="">
                {popupOptions.map((option, index) => (
                  <div key={index} className="font-bold flex items-center  gap-4  m-5 h-9 pl-3 hover:bg-slate-200 rounded-lg">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
              <div className=" place-self-center ">
              <button className='border p-1.5 items-center w-56 hover:bg-red-500 font-bold rounded-lg'>Start Recording</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default DacsPluse;
