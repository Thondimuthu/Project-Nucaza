import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AddIcon,
  AllspaceIcon,
  CreatespaceIcon,
  DashboardIcon,
  EverythinkIcon,
  HelpCircleIcon,
  Homeicon,
  Inboxicon,
  TeamspaceIcon,
  ThreeDotIcon,
  UserPlusIcon,
} from '../Icons/Icons.jsx';
import DacsPluse from '../Components/Popup-Components/DacsPluse.jsx';
import ClipsPluse from '../Components/Popup-Components/ClipsPluse.jsx'
import TimeSheet from '../Components/Popup-Components/TimeSheetPluse.jsx';
import WhiteboadrsPluse from '../Components/Popup-Components/WhiteboadrsPluse.jsx'
import Xlpopup from '../Components/Popup-Components/XLPopup.jsx';








const sidebarLinks = [
  { to: '/home', label: 'Home', icon:<Homeicon />  },
  { to: '/inbox', label: 'Inbox', icon: <Inboxicon /> },

  { to: '/everythink', label: 'Everything', icon: < EverythinkIcon/>},
  { to: '#', label: 'Team Space', icon: <TeamspaceIcon /> },
  { to: '#', label: 'View All Spaces', icon: <AllspaceIcon /> },
  { to: '#', label: 'Create Space', icon: <CreatespaceIcon /> },
];

const Sidebar = () => { 
  return (
    <div className="border border-gray-200  w-96 max-h-screen overflow-y-auto mt-2 rounded-lg shadow-md">
      <div className="flex flex-col p-2">

        <div className="border border-b-2 border-t-0 border-l-0 border-r-0">
          { sidebarLinks.slice(0, 2).map((item, index) => (
            <NavLink
            
              key={index}
              to={item.to}
              className={`flex ${
                item.hasExtraIcons ? 'justify-between' : 'items-center'
              } p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group`}
            >
              <div className="flex">
                {item.icon}
                <span className="font-semibold fon ml-4">{item.label}</span>
              </div>
              {item.hasExtraIcons && (
                <div className="flex gap-4 pr-3 invisible group-hover:visible">
                  <ThreeDotIcon />
                  <AddIcon />
                </div>
              )}
            </NavLink>
          ))}

          {/*  SideBar popup content*/}
          <WhiteboadrsPluse/>
          <Xlpopup/>
          <ClipsPluse/>
          <DacsPluse />
          <TimeSheet/>
          
        </div>

        <div className=" ">
          {sidebarLinks.slice(2).map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
              {item.icon}
              <span className="font-semibold fon ml-4">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="border-t my-4"></div>
        <div className="flex justify-between space-x-2 p-2">
          <button
            className="shadow flex items-center justify-center border border-green-500 text-green-600 w-28 py-2 rounded-md hover:bg-green-50 transition-all duration-300 ease-in-out"
          >
            <UserPlusIcon className="mr-2" /> Invite
          </button>
          <button
            className="flex items-center justify-center border border-blue-500 text-blue-600 w-28 py-2 rounded-md hover:bg-blue-50 transition-all duration-300 ease-in-out"
          >
            <HelpCircleIcon className="mr-2" /> Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
