import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DropdownButton from './src/Components/Header/Profile.jsx';
import StandardLayout from './src/Layout/StandardLayout.jsx';
import Home from './src/Components/Content/Home.jsx'
import Inbox from './src/Components/Content/Inbox.jsx'
import Docs from './src/Components/Content/Docs.jsx'
import Clips from './src/Components/Content/Clips.jsx'
import Whiteboard  from './src/Components/Content/Whiteboard.jsx'
import Timesheet  from './src/Components/Content/Timesheet.jsx'
import Everythink from './src/Components/Content/Everything.jsx'
import Xlsheets from './src/Components/Content/Xlsheets.jsx';




function Router() {
  const routes = [
    { path: '/', element: <StandardLayout /> },
    { path: '/home', element: <Home /> },
    { path: '/inbox', element: <Inbox /> },
    { path: '/docs', element: <Docs /> },
    { path: '/xlsheets', element: <Xlsheets /> },
    { path: '/whiteboard', element: <Whiteboard /> },
    { path: '/clips', element: <Clips /> },
    { path: '/timesheets', element: <Timesheet /> },
    { path: '/everythink', element: <Everythink /> },
    {path:'/profile', element:<DropdownButton/>},
  ];
  
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default Router;