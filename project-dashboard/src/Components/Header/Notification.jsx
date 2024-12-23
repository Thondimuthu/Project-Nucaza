import React, { useState } from 'react';
import { Favurate } from '../../Icons/Icons.jsx';

function Notification() {
    const [open, setOpen] = useState(false); // State to handle popup visibility

    const togglePopup = () => {
        setOpen((prevOpen) => !prevOpen); // Toggle the `open` state
    };

    return (
        <>
            <div className="relative inline-block text-left z-50">
                <div>
                    <button
                        type="button"
                        className="h-10 w-10"
                        onClick={togglePopup} // Toggle the popup on button click
                    >
                        <Favurate />
                    </button>
                </div>

                {open && ( // Conditionally render the popup
                    <div className="origin-top-right absolute right-0 mr-52 w-96 h-96 shadow-lg bg-white ring-1 ring-opacity-5 divide-y divide-gray-800">
                        <div className="p-4">
                            <h1 className="text-lg font-bold">Notification</h1>
                            <p>This is the content inside the notification popup.</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Notification;
