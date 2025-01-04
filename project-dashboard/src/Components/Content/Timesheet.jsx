import StandardLayout from '../../Layout/StandardLayout.jsx'
import { SettingIcon, TimeSheetIcon } from '../../assets/SVGImage/SideBar/Icons.jsx'



function TimeSheet() {

  return (
    <>
        <StandardLayout>
                    <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                        {/* header content */}
                        <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                            <div className="flex ">
                                <TimeSheetIcon />
                                <span className='mt-1 ml-2 font-bold'>TimeSheets</span>
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

export default TimeSheet