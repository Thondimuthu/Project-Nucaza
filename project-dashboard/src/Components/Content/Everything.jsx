import React from 'react'
import StandardLayout from '../../Layout/StandardLayout'


function Everythink() {
  return (
    <>
        <StandardLayout>
                    <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                        {/* header content */}
                        <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                            <div className="flex ">
                                <span className='mt-1 ml-2 font-bold'>Everything</span>
                            </div>
                        </div>
                    </div>
                </StandardLayout>
    </>
  )
}

export default Everythink