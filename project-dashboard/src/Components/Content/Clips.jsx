import React from 'react'
import { ClipIcon} from '../../Icons/Icons.jsx'
import StandardLayout from '../../Layout/StandardLayout.jsx'




function Clips() {
    return (
        <>
            <StandardLayout>
                <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                    {/* header content */}
                    <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                        <div className="flex text-lg mt-1" >
                            <span><ClipIcon /></span>
                            <span className=' ml-2 font-bold'>Clips</span>
                        </div>


                        <div className="mr-2 flex ">

                            <button className='active rounded-lg w-36 mr-4 bg-green-800 font-semibold mb-1 text-slate-100'>New Clip</button>
                        </div>
                    </div>
                    <div className=" mt-5 ml-8">
                        <p className="text-3xl font-semibold text-gray-800">Welcome to Clips</p>
                    </div>
                </div>
            </StandardLayout>
        </>
    )
}

export default Clips