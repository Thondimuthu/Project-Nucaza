import React from 'react';
import Sidebar from '../Pages/Sidebar.jsx';
import NavHeader from '../Pages/Sideheader.jsx';

function StandardLayout({ children }) {
    return (
        <div className="">
            <NavHeader />
            <div className="ml-5 flex">
                <Sidebar />
                {children}
                
            </div>
        </div>
    );
}

export default StandardLayout; 
