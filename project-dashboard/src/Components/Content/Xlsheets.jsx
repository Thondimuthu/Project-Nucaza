import React from 'react'
import { DashboardIcon, SearchIcon } from '../../Icons/Icons.jsx'
import StandardLayout from '../../Layout/StandardLayout.jsx'

function Xlsheets() {
    return (
        <>
            <div className="">
                <StandardLayout>
                    <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                        {/* header content */}
                        <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                            <div className="flex ">
                                <DashboardIcon />
                                <span className='mt-1 ml-2 font-bold'>XL sheets</span>
                            </div>
                            <div className="mr-2 flex ">
                                <div className="flex  items-center mr-5  border  mb-1">
                                    <span className='font-black pl-1  ' ><SearchIcon /></span>
                                    <input className='h-7 mr-3 outline-none  pl-3' type="text" placeholder='Search XL sheets' />
                                </div>
                                <button  className='rounded-lg  w-36 mr-4 bg-green-800 font-semibold mb-1 text-slate-100'>New XL sheets</button>
                            </div>
                        </div>
                    </div>
                </StandardLayout>
            </div>
        </>
    )
}

export default Xlsheets