import React from 'react';
import { Homeicon } from '../../Icons/Icons.jsx';
import ManageButton from '../ManageButton.jsx';
import Settings from '../Settings.jsx';
import StandardLayout from '../../Layout/StandardLayout.jsx';


function Home() {
    return (
        <>
        <StandardLayout>
            <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

            {/* header content */}
            <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                <div className="flex ">
                    <Homeicon />
                    <span className='mt-1 ml-2 font-bold'>Home</span>
                </div>
                <div className="mr-7 flex">
                    <ManageButton/>
                    <Settings/>
                </div>
            </div>
            <p className="text-3xl font-semibold text-gray-800 mb-5 pt-5 ml-16">Hi User,</p>

            <div className="grid grid-cols-2 p-5 m-3 gap-4  bg-white ">

                <div className="ml-8 w-[390px] pl-5 pt-5 h-72  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  text-gray-500">
                    <label className='text-xl font-bold '>Recents</label>
                </div>
                <div className="ml-8 w-[390px]  pl-5 pt-5 h-72  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  text-gray-500">
                    <label className='text-xl font-bold '>Agenda</label>
                </div>
                <div className="pl-5 pt-5 h-72 ml-8 w-[390px]  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  text-gray-500">
                    <label className='text-xl font-bold '>MY Work</label>
                </div>
                <div className="pl-5 pt-5 h-72 ml-8 w-[390px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  text-gray-500">
                    <label className='text-xl font-bold '>Assigned to me</label>
                </div>
                <div className="pl-5 pt-5 h-72 ml-8 w-[390px]  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out   text-gray-500">
                    <label className='text-xl font-bold '>Personal List</label>
                </div>
                <div className="pl-5 pt-5 h-72 ml-8 w-[390px]  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out  text-gray-500">
                    <label className='text-xl font-bold '>Assigned comments</label>
                </div>
            </div>

            <div className="pl-5 pt-5 h-52 mt-6 rounded-lg shadow-md m-10 bg-white">
                <label className='text-2xl font-bold '>LineUp</label>
            </div>
        </div>
        </StandardLayout>
        </>
    );
}

export default Home;
