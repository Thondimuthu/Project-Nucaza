import React from 'react'
import { SettingIcon, TimesheetsIcon } from '../../Icons/Icons.jsx'
import StandardLayout from '../../Layout/StandardLayout.jsx'



function Timesheet() {
  return (
    <>
        <StandardLayout>
                    <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                        {/* header content */}
                        <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                            <div className="flex ">
                                <TimesheetsIcon />
                                <span className='mt-1 ml-2 font-bold'>Timesheets</span>
                            </div>
                            <div className="mr-2 flex ">
                                <div className="flex rounded-lg items-center mb-1 bg-gray-800 pl-3 text-slate-100">
                                    <SettingIcon/>
                                <button className='  w-24  font-semibold'>Configure</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </StandardLayout>
    </>
  )
}

export default Timesheet