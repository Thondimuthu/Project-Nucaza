import React, { useState } from 'react';
import { Favorite } from '../../Icons/Icons.jsx';

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
                        <Favorite />
                    </button>
                </div>

            </div>
        </>
    );
}

export default Notification;
