import { Route, Routes } from 'react-router-dom';
import Header from './src/Pages/Header.jsx';
import StandardLayout from './src/Layout/StandardLayout.jsx';
import Home from './src/Components/Content/Home.jsx'
import Inbox from './src/Components/Content/Inbox.jsx'
import Docs from './src/Components/Content/Docs.jsx'
import Clips from './src/Components/Content/Clips.jsx'
import Whiteboard  from './src/Components/Content/Whiteboard.jsx'
import TimeSheet  from './src/Components/Content/TimeSheet.jsx'
import Everything from './src/Components/Content/Everything.jsx'
import XlSheets from './src/Components/Content/XlSheets.jsx';
import Profile from './src/Components/Header/Profile.jsx'
import Theme from './src/Components/Header/Profile/Theme.jsx';



function Router() {
  const routes = [
    { path: '/', element: <StandardLayout /> },
    { path: '/home', element: <Home /> },
    { path: '/inbox', element: <Inbox /> },
    { path: '/docs', element: <Docs /> },
    { path: '/xlSheets', element: <XlSheets /> },
    { path: '/whiteboard', element: <Whiteboard /> },
    { path: '/clips', element: <Clips /> },
    { path: '/timeSheets', element: <TimeSheet /> },
    { path: '/everything', element: <Everything /> },
    {path:'/profile', element:<Profile/>},
    {path:'/theme', element:<Theme/>},
    {path:'/header', element:<Header/>},
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