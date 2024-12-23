import React from 'react';
import { Inboxicon } from '../../Icons/Icons.jsx';
import StandardLayout from '../../Layout/StandardLayout.jsx';
// import ManageButton from '../Components/ManageButton.jsx';
// import Settings from '../Components/Settings.jsx';


function Inbox() {
    return (
        <>
            <StandardLayout>
                <div className="mt-2 m-5 w-screen max-h-screen overflow-y-auto bg-gray-100">

                    {/* header content */}
                    <div className="bg-white flex justify-between border border-gray-100 p-2 items-center shadow-md ">
                        <div className="flex  w-96 items-center">
                        <div className="flex border border-b-0 border-t-0 border-l-0 border-r-2 pr-3 pl-2">
                            <Inboxicon />
                            <span className=' ml-2 font-black '>Inbox</span>
                        </div>
                        <div className="flex gap-3 ml-3">
                                <p className=' hover:bg-gray-300 rounded-md p-1 '>Importand</p>
                                <p className=' hover:bg-gray-300 rounded-md p-1 '>Other</p>
                                <p className=' hover:bg-gray-300 rounded-md p-1 '>Snoozed</p>
                                <p className=' hover:bg-gray-300 rounded-md p-1 '>Cleard</p>
                            </div>
                        </div>
                        <div className="mr-7 flex gap-8">
                            <p className=' hover:bg-gray-300 rounded-md p-1 '>Filter</p>
                            <p className=' hover:bg-gray-300 rounded-md p-1 '>Clear All</p>
                            <p className=' hover:bg-gray-300 rounded-md p-1 '>Customize</p>
                        </div>
                    </div>

                    

                    
                </div>
            </StandardLayout>
        </>
    );
}

export default Inbox;
