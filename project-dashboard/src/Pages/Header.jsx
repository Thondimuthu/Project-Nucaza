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
        { id: 1, icons: <NoteIcon /> },
        { id: 2, icons: <FavoriteIcon /> },
        { id: 3, icons: <ProfileIcon /> },
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
                { icon: <AccountIcon />, label: 'Profile' },
                { icon: <ThemeIcon />, label: 'Theme' },
                { icon: <SettingsIcon />, label: 'Settings' },
                { icon: <NotificationIcon />, label: 'Notification Settings' }
            ]
        },
        {
            section: 'secondary',
            items: [
                { icon: <KeyBoardIcon />, label: 'Keyboard Shortcuts' },
                { icon: <DownloadIcon />, label: 'Download App' },
                { icon: <ReferralsIcon />, label: 'Referrals' },
                { icon: <HelpIcon />, label: 'Help' }
            ]
        },
        {
            section: 'danger',
            items: [
                { icon: <TrashIcon />, label: 'Trash' },
                { icon: <LogoutIcon />, label: 'Logout' }
            ]
        }
    ];

    return (
        <nav className="lg:bg-indigo-800 lg:h-16 lg:p-3 lg:shadow-sm lg:flex lg:flex-wrap lg:justify-between lg:items-center md:bg-red-700 md:h-16 md:p-3 md:shadow-sm md:flex md:flex-wrap md:justify-between md:items-center">
            {/* Logo Section */}
            <div className="lg:flex lg:items-center lg:space-x-4 lg:ml-4 md:flex md:items-center md:space-x-4 md:ml-4">
                <svg
                    className="lg:h-10 lg:w-10 lg:text-gray-100 md:h-10 md:w-10 md:text-gray-100"
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
            <div className="lg:flex lg:items-center lg:justify-around md:flex md:items-center md:justify-around">
                <div className='lg:mr-20 md:mr-10'><SearchIcon /></div>

                
                {/* Action Items */}
                {actionItems.map((item) => (
                    <div key={item.id} className="lg:mr-6 md:mr-4">
                        <button
                            className=''
                            onClick={() => handleOpenItem(item.id)}
                        >
                            {item.icons}
                        </button>

                        {/* Action Items */}
                        {activeItemId === item.id && (
                            <div className="lg:absolute lg:right-0 lg:mt-2 lg:w-48 lg:rounded-md lg:shadow-lg lg:py-1 lg:z-10 md:absolute md:right-0 md:mt-2 md:w-48 md:rounded-md md:shadow-lg md:py-1 md:z-10 md">

                                {item.id === 1 && (
                                    <div className="lg:origin-top-right lg:absolute lg:right-0 lg:mr-52 lg:w-96 lg:h-96 lg:shadow-lg lg:bg-white lg:ring-1 lg:ring-opacity-5 lg:divide-y lg:divide-gray-800    md:origin-top-right md:absolute md:right-0 md:mr-32 md:w-60 md:h-72 md:shadow-lg md:bg-white md:ring-1 md:ring-opacity-5 md:divide-y md:divide-gray-800">
                                        <div className="p-4">
                                            <h1 className="text-lg font-bold">NOTE</h1>
                                            <p>This is the content inside the notification popup.</p>
                                        </div>
                                    </div>
                                )}

                                {item.id === 2 && (
                                    <div className="lg:origin-top-right lg:absolute lg:right-0 lg:mr-32 lg:w-96 lg:h-96 lg:shadow-lg lg:bg-white lg:ring-1 lg:ring-opacity-5 lg:divide-y lg:divide-gray-800 md:origin-top-right md:absolute md:right-0 md:mr-24 md:w-60 md:h-72 md:shadow-lg md:bg-white md:ring-1 md:ring-opacity-5 md:divide-y md:divide-gray-800">
                                        <div className="lg:p-4 md:p-4">
                                            <h1 className="lg:text-lg md:text-lg font-bold">NOTIFICATION</h1>
                                            <p>This is the content inside the notification popup.</p>
                                        </div>
                                    </div>
                                )}
                                {item.id === 3 && (
                                    <div className="border border-red-700 lg:origin-top-right lg:absolute lg:right-0 lg:mr-14 lg:mt-2 lg:w-80 lg:rounded-md lg:shadow-lg lg:bg-white lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:divide-y lg:divide-gray-100        
                                                     md:origin-top-right md:absolute md:right-0 md:mr-12 md:w-60 md:rounded-md md:shadow-lg md:bg-white md:ring-1 md:ring-black md:ring-opacity-5 md:divide-y md:divide-gray-100">
                                        <div>
                                            <div className="lg:border lg:border-t-0 lg:border-r-0 lg:border-l-0    md:border md:border-t-0 md:border-r-0 md:border-l-0">
                                                <h1><ProfileImage /></h1>
                                            </div>

                                            {menuItems.map((section) => (
                                                <div key={section.section} className={`${section.section !== 'danger' ? 'border border-t-0 border-r-0 border-l-0' : ''} lg:m-4 md:m-1`}>
                                                    {section.items.map((menuItem, itemIndex) => (
                                                        <Link
                                                            key={itemIndex}
                                                            to="/profile"
                                                            className={`block px-4 py-2 text-sm ${section.section === 'danger' ? 'lg:text-blue-600 lg:hover:text-blue-900 md:text-red-600 md:hover:text-red-900' : 'lg:text-gray-700 lg:hover:bg-gray-100 md:text-gray-700 md:hover:bg-gray-100'}`}
                                                            role="menuitem"
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
