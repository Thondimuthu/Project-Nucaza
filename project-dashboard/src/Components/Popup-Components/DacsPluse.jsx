
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AddIcon, DocsIcon, ThreeDotIcon } from '../../Icons/Icons.jsx';
import {
  Ai,
  Image,
  Link,
  Message,
  Settin,
  Share,
  Star,
  Sticres,
  ThreeDot,
  Verify,
} from '../../Icons/DocsIcons.jsx';




function DacsPluse() {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setIsShowPopup(!isShowPopup);
  };

  // Array for popup options
  const popupOptions = [
    { icon: <Link />, label: 'Link to task or Desk' },
    { icon: <Ai />, label: 'Ash Ai' },
    { icon: <Verify />, label: 'Mark Wiki' },
    { icon: <Sticres />, label: 'Add Icon' },
    { icon: <Image />, label: 'Add Cover' },
    { icon: <Settin />, label: 'Settings' },
  ];

  return (
    <div>
      <NavLink
        to="/docs"
        className="flex justify-between items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
      >
        <div className="flex">
          <DocsIcon />
          <span className="font-semibold ml-4">Docs</span>
        </div>
        <div className="flex gap-4 pr-3 invisible group-hover:visible">
          <ThreeDotIcon />
          <button className="" onClick={handleTogglePopup}>
            <AddIcon />
          </button>
        </div>
      </NavLink>

      {isShowPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-4/5 h-3/4 p-5 rounded-lg shadow-lg relative">
            <div className="border border-t-0 border-l-0 border-r-0 flex justify-between items-center p-3">
              <span className='flex gap-2 items-center'>
                <DocsIcon />
                <span className='font-bold'>Create Docs</span>
              </span>
              <div className="flex items-center gap-6"> 
                <Share />
                <Star />
                <Message />
                <ThreeDot />
                <button
                  className="border rounded-lg w-14 h-10 text-gray-600 text-lg hover:bg-red-600 hover:text-white"
                  onClick={handleTogglePopup}
                >
                  X
                </button>
              </div>
            </div>

            <div className="m-5">
              <div className="font-bold flex gap-3">
                {popupOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
              <input
                className="text-7xl font-bold outline-none m-5"
                type="text"
                placeholder="Untitled"
              />
              <div className="flex gap-3">
                Last Update :
                <input type="datetime-local" />
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

export default DacsPluse;
