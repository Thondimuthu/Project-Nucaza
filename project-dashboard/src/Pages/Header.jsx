import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from '../Components/ProfileImageSet.jsx';
import { NoteIcon, FavoriteIcon, ProfileIcon, SearchIcon } from '../assets/SVGImage/Header/Icons.jsx';
import { AccountIcon, DownloadIcon, HelpIcon, KeyBoardIcon, LogoutIcon, NotificationIcon, ReferralsIcon, SettingsIcon, ThemeIcon, TrashIcon } from '../assets/SVGImage/Header/Profile.jsx';

function Header() {
    const [activeItemId, setActiveItemId] = useState(null);
    
    const [open, setOpen] = useState(false);

    // Define a list of action items
    const actionItems = [
        { id: 1, icons: <NoteIcon />, label: 'Notes' },
        { id: 2, icons: <FavoriteIcon />, label: 'Favorites' },
        { id: 3, icons: <ProfileIcon />, label: 'Profile' },
    ];

    const handleOpenItem = (id) => {
        setActiveItemId(id === activeItemId ? null : id);
        if (id === 3) {
            setOpen(!open);
        }
    };

    const menuItems = [

        {
            section: 'main',
            items: [
                { to: '/profile', icon: <AccountIcon />, label: 'Profile' },
                { to: '/theme', icon: <ThemeIcon />, label: 'Theme' },
                { to: '/settings', icon: <SettingsIcon />, label: 'Settings' },
                { to: '/notifications', icon: <NotificationIcon />, label: 'Notification Settings' }
            ]
        },
        {
            section: 'secondary',
            items: [
                { to: '/keyboard-shortcuts', icon: <KeyBoardIcon />, label: 'Keyboard Shortcuts' },
                { to: '/download', icon: <DownloadIcon />, label: 'Download App' },
                { to: '/referrals', icon: <ReferralsIcon />, label: 'Referrals' },
                { to: '/help', icon: <HelpIcon />, label: 'Help' }
            ]
        },
        {
            section: 'danger',
            items: [
                { to: '/trash', icon: <TrashIcon />, label: 'Trash' },
                { to: '/logout', icon: <LogoutIcon />, label: 'Logout' }
            ]
        }
    ];

    return (
        <nav className="bg-indigo-800 h-16 p-3 shadow-sm flex flex-wrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 ml-4">
                <svg
                    className="h-10 w-10 text-gray-100"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 480 512"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M313.2 47.5c1.2-13 21.3-14 36.6-8.7.9.3 26.2 9.7 19 15.2-27.9-7.4-56.4 18.2-55.6-6.5zm-201 6.9c30.7-8.1 62 20 61.1-7.1-1.3-14.2-23.4-15.3-40.2-9.6-1 .3-28.7 10.5-20.9 16.7zM319.4 160c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-159.7 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm318.5 163.2c-9.9 24-40.7 11-63.9-1.2-13.5 69.1-58.1 111.4-126.3 124.2.3.9-2-.1 24 1 33.6 1.4 63.8-3.1 97.4-8-19.8-13.8-11.4-37.1-9.8-38.1 1.4-.9 14.7 1.7 21.6 11.5 8.6-12.5 28.4-14.8 30.2-13.6 1.6 1.1 6.6 20.9-6.9 34.6 4.7-.9 8.2-1.6 9.8-2.1 2.6-.8 17.7 11.3 3.1 13.3-14.3 2.3-22.6 5.1-47.1 10.8-45.9 10.7-85.9 11.8-117.7 12.8l1 11.6c3.8 18.1-23.4 24.3-27.6 6.2.8 17.9-27.1 21.8-28.4-1l-.5 5.3c-.7 18.4-28.4 17.9-28.3-.6-7.5 13.5-28.1 6.8-26.4-8.5l1.2-12.4c-36.7.9-59.7 3.1-61.8 3.1-20.9 0-20.9-31.6 0-31.6 2.4 0 27.7 1.3 63.2 2.8-61.1-15.5-103.7-55-114.9-118.2-25 12.8-57.5 26.8-68.2.8-10.5-25.4 21.5-42.6 66.8-73.4.7-6.6 1.6-13.3 2.7-19.8-14.4-19.6-11.6-36.3-16.1-60.4-16.8 2.4-23.2-9.1-23.6-23.1.3-7.3 2.1-14.9 2.4-15.4 1.1-1.8 10.1-2 12.7-2.6 6-31.7 50.6-33.2 90.9-34.5 19.7-21.8 45.2-41.5 80.9-48.3C203.3 29 215.2 8.5 216.2 8c1.7-.8 21.2 4.3 26.3 23.2 5.2-8.8 18.3-11.4 19.6-10.7 1.1.6 6.4 15-4.9 25.9 40.3 3.5 72.2 24.7 96 50.7 36.1 1.5 71.8 5.9 77.1 34 2.7.6 11.6.8 12.7 2.6.3.5 2.1 8.1 2.4 15.4-.5 13.9-6.8 25.4-23.6 23.1-3.2 17.3-2.7 32.9-8.7 47.7 2.4 11.7 4 23.8 4.8 36.4 37 25.4 70.3 42.5 60.3 66.9z"></path>
                </svg>
            </div>

            {/* Search and Action Items */}
            <div className="flex items-center justify-around">
                <div className="mr-20"><SearchIcon /></div>
                
                {/* Action Items */}
                {actionItems.map((item) => (
                    <div key={item.id} className="mr-6">
                        <button
                            className="focus:outline-none"
                            onClick={() => handleOpenItem(item.id)}
                            aria-label={item.label}
                        >
                            {item.icons}
                        </button>

                        {activeItemId === item.id && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10">
                                {item.id === 1 && (
                                    <div className="origin-top-right absolute right-0 mr-52 w-96 shadow-lg bg-white ring-1 ring-opacity-5 divide-y divide-gray-800">
                                        <div className="p-4">
                                            <h1 className="text-lg font-bold">Notes</h1>
                                            <p>Your notes will appear here.</p>
                                        </div>
                                    </div>
                                )}

                                {item.id === 2 && (
                                    <div className="origin-top-right absolute right-0 mr-32 w-96 shadow-lg bg-white ring-1 ring-opacity-5 divide-y divide-gray-800">
                                        <div className="p-4">
                                            <h1 className="text-lg font-bold">Favorites</h1>
                                            <p>Your favorite items will appear here.</p>
                                        </div>
                                    </div>
                                )}

                                {item.id === 3 && (
                                    <div className="origin-top-right absolute right-0 mr-14 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                        <div>
                                            <div className="border-b">
                                                <ProfileImage />
                                            </div>

                                            {menuItems.map((section) => (
                                                <div key={section.section} className={`${section.section !== 'danger' ? 'border-b' : ''} p-4`}>
                                                    {section.items.map((menuItem, itemIndex) => (
                                                        <Link
                                                            key={itemIndex}
                                                            to={menuItem.to}
                                                            className={`block px-4 py-2 text-sm ${section.section === 'danger' ? 'text-red-600 hover:text-red-900' : 'text-gray-700 hover:bg-gray-100'}`}
                                                        >
                                                            <div className="flex gap-2 items-center">
                                                                {menuItem.icon}
                                                                <span className="text-base font-bold">{menuItem.label}</span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Header;
