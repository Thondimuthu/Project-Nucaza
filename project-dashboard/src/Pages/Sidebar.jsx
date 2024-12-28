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
  { to: '#', label: 'Tmeam Space', icon: <TeamspaceIcon /> },
  { to: '#', label: 'View All Spaces', icon: <AllspaceIcon /> },
  { to: '#', label: 'Create Space', icon: <CreatespaceIcon /> },
];

const Sidebar = () => { 
  return (
    <div className="lg:border lg:border-gray-200  lg:w-96 lg:max-h-screen lg:overflow-y-auto lg:mt-2 lg:rounded-lg lg:shadow-md
                    md:border md:border-gray-200  md:w-96 md:max-h-screen md:overflow-y-auto md:mt-2 md:rounded-lg md:shadow-md">
      <div className="lg:flex lg:flex-col lg:p-2">

        <div className="lg:border lg:border-b-2 lg:border-t-0 lg:border-l-0 lg:border-r-0
        md:border md:border-b-2 md:border-t-0 md:border-l-0 md:border-r-0">
          { sidebarLinks.slice(0, 2).map((item, index) => (
            <NavLink
            
              key={index}
              to={item.to}
              className={`flex ${
                item.hasExtraIcons ? 'lg:justify-between md:justify-between' : 'lg:items-center md:items-center'
              } lg:p-2 lg:m-1 lg:hover:shadow-md lg:hover:text-blue-600 lg:rounded-md lg:transition-all lg:duration-300 lg:ease-in-out lg:group
              md:p-2 md:m-1 md:hover:shadow-md md:hover:text-blue-600 md:rounded-md md:transition-all md:duration-300 md:ease-in-out md:group`}
            >
              <div className="lg:flex md:flex">
                {item.icon}
                <span className="lg:font-semibold lg:font-mono lg:ml-4 md:font-semibold md:font-mono md:ml-4">{item.label}</span>
              </div>
              {item.hasExtraIcons && (
                <div className="lg:flex lg:gap-4 lg:pr-3 lg:invisible lg:group-hover:visible md:flex md:gap-4 md:pr-3 md:invisible md:group-hover:visible ">
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
              className="lg:flex lg:items-center lg:p-2 lg:m-1 lg:hover:shadow-md lg:hover:text-blue-600 lg:rounded-md lg:transition-all lg:duration-300 lg:ease-in-out lg:group
              md:flex md:items-center md:p-2 md:m-1 md:hover:shadow-md md:hover:text-blue-600 md:rounded-md md:transition-all md:duration-300 md:ease-in-out md:group"
            >
              {item.icon}
              <span className="lg:font-semibold lg:font-mono lg:ml-4 md:font-semibold md:font-mono md:ml-4">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="lg:border-t lg:my-4 md:border-t md:my-4"></div>
        <div className="lg:flex lg:justify-between lg:space-x-2 lg:p-2 md:flex md:justify-between md:space-x-2 md:p-2">
          <button
            className="lg:shadow lg:flex lg:items-center lg:justify-center lg:border lg:border-green-500 lg:text-green-600 lg:w-28 lg:py-2 lg:rounded-md lg:hover:bg-green-50 lg:transition-all lg:duration-300 lg:ease-in-out 
                      md:shadow md:flex md:items-center md:justify-center md:border md:border-green-500 md:text-green-600 md:w-28 md:py-2 md:rounded-md md:hover:bg-green-50 md:transition-all md:duration-300 md:ease-in-out"
          >
            <UserPlusIcon className="lg:mr-2 md:mr-2" /> Invite
          </button>
          <button
            className="lg:flex lg:items-center lg:justify-center lg:border lg:border-blue-500 lg:text-blue-600 lg:w-28 lg:py-2 lg:rounded-md lg:hover:bg-blue-50 lg:transition-all lg:duration-300 lg:ease-in-out 
                      md:flex md:items-center md:justify-center md:border md:border-blue-500 md:text-blue-600 md:w-28 md:py-2 md:rounded-md md:hover:bg-blue-50 md:transition-all md:duration-300 md:ease-in-out"
          >
            <HelpCircleIcon className="lg:mr-2 md:mr-2" /> Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
