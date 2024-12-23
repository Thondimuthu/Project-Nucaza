import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Acount, 
    Download, 
    Help, 
    KeyBoard, 
    Logout, 
    Notification, 
    Referrals, 
    Settings, 
    Theme, 
    Trash 
} from '../../Icons/Profilesicons.jsx';
import { ProfileIcon } from '../../Icons/Icons.jsx';

const Profile = () => {
    const [open, setOpen] = useState(false); // State to toggle the dropdown menu

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className="relative inline-block text-left z-50">
            <div>
                <button
                    type="button"
                    className="h-10 w-10"
                    onClick={toggleMenu} // Toggle menu visibility
                >
                    <ProfileIcon />
                </button>
            </div>

            

            {open && ( // Conditional rendering for the dropdown menu
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                    <div>
                        <div className="border border-t-0 border-r-0 border-l-0 m-4 pb-5">
                            <h1>Profile image</h1>
                        </div>
                        <div className="border border-t-0 border-r-0 border-l-0 m-4">
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Acount />
                                    <span className="text-base font-bold">Profile</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Theme />
                                    <span className="text-base font-bold">Theme</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Settings />
                                    <span className="text-base font-bold">Settings</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Notification />
                                    <span className="text-base font-bold">Notification Settings</span>
                                </div>
                            </Link>
                        </div>

                        <div className="border border-t-0 border-r-0 border-l-0 m-4">
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <KeyBoard />
                                    <span className="text-base font-bold">Keyboard Shortcuts</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Download />
                                    <span className="text-base font-bold">Download App</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Referrals />
                                    <span className="text-base font-bold">Referrals</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2">
                                    <Help />
                                    <span className="text-base font-bold">Help</span>
                                </div>
                            </Link>
                        </div>

                        <div className="m-4">
                            <Link
                                to="#"
                                className="block text-sm px-4 py-2 text-red-600 hover:bg-gray-100 hover:text-red-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2 items-center">
                                    <Trash />
                                    <span className="text-base font-bold">Trash</span>
                                </div>
                            </Link>
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-red-900"
                                role="menuitem"
                            >
                                <div className="flex gap-2 items-center">
                                    <Logout />
                                    <span className="text-base font-bold">Logout</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
