import { NavLink } from 'react-router-dom';
import XLPopup from '../Components/Popup-Components/XLPopup.jsx';
import { AllSpaceIcon, EverythingIcon, HomeIcon, InboxIcon, TeamSpaceIcon, CreateSpaceIcon, ThreeDotIcon, AddIcon } from '../assets/SVGImage/SideBar/Icons.jsx';
import DocsPluse from '../Components/Popup-Components/DocsPluse.jsx';
import TimeSheet from '../Components/Popup-Components/TimeSheetPluse.jsx';
import ClipsPluse from '../Components/Popup-Components/ClipsPluse.jsx';
import { HelpIcon, UserIcon } from '../assets/SVGImage/SideBar/Icons.jsx'; 
// import WhiteboardsPlus from '../Components/Popup-Components/WhiteBoardsPluse.jsx'; 






const sidebarLinks = [
  { to: '/home', label: 'Home', icon: <HomeIcon /> },
  { to: '/inbox', label: 'Inbox', icon: <InboxIcon /> },
  { to: '/everything', label: 'Everything', icon: <EverythingIcon /> },
  { to: '/team-space', label: 'Team Space', icon: <TeamSpaceIcon /> },
  { to: '/all-spaces', label: 'View All Spaces', icon: <AllSpaceIcon /> },
  { to: '/create-space', label: 'Create Space', icon: <CreateSpaceIcon /> },
];

const Sidebar = () => {
  return (
    <div className="lg:border lg:border-gray-200 lg:w-96 lg:h-screen lg:overflow-y-auto lg:mt-2 lg:rounded-lg lg:shadow-md md:border md:border-gray-200 md:w-96 md:max-h-screen md:overflow-y-auto md:mt-2 md:rounded-lg md:shadow-md">
      <div className="lg:flex lg:flex-col lg:p-2">
        <div className="lg:border lg:border-b-2 lg:border-t-0 lg:border-l-0 lg:border-r-0 md:border md:border-b-2 md:border-t-0 md:border-l-0 md:border-r-0">
          {sidebarLinks.slice(0, 2).map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="flex items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
              <div className="flex items-center">
                {item.icon}
                <span className="font-semibold font-mono ml-4">{item.label}</span>
              </div>
              <div className="flex gap-4 pr-3 ml-auto invisible group-hover:visible">
                <ThreeDotIcon />
                <AddIcon />
              </div>
            </NavLink>
          ))}
          
          {/* SideBar popup content */}
          {/* <WhiteboardsPlus /> */}
          <XLPopup />
          <ClipsPluse />
          <DocsPluse />
          <TimeSheet />
        </div>

        <div>
          {sidebarLinks.slice(2).map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="flex items-center p-2 m-1 hover:shadow-md hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out group"
            >
              {item.icon}
              <span className="font-semibold font-mono ml-4">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="border-t my-4"></div>
        <div className="flex justify-between space-x-2 p-2">
          <button className="shadow flex items-center justify-center border border-green-500 text-green-600 w-28 py-2 rounded-md hover:bg-green-50 transition-all duration-300 ease-in-out">
            <UserIcon className="mr-2" /> Invite
          </button>
          <button className="flex items-center justify-center border border-blue-500 text-blue-600 w-28 py-2 rounded-md hover:bg-blue-50 transition-all duration-300 ease-in-out">
            <HelpIcon className="mr-2" /> Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
