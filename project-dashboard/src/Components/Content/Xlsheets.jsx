import { SearchIcon } from '../../assets/SVGImage/Header/Icons.jsx'
import StandardLayout from '../../Layout/StandardLayout.jsx'
import { RiFileExcel2Line } from "react-icons/ri";

function XlSheets() {

    const handleNewXlSheet = () => {
       alert("New XL sheet created");
    }   



    return (
        <>
            <div className="">
                <StandardLayout>
                    <div className="bg-gray-100 mt-2 m-5 w-screen max-h-screen overflow-y-auto ">

                        {/* header content */}
                        <div className="bg-white flex justify-between border border-gray-100 h-12 pt-2 pl-3 shadow-md">
                            <div className="flex ">
                                <RiFileExcel2Line className="text-2xl" />
                                <span className='mt-1 ml-2 font-bold'>XL sheets</span>
                            </div>
                            <div className="mr-2 flex ">
                                <div className="flex  items-center mr-5  border  mb-1">
                                    <span className='font-black pl-1  ' ><SearchIcon /></span>
                                    <input className='h-7 mr-3 outline-none  pl-3' type="text" placeholder='Search XL sheets' />
                                </div>
                                    <div>
                                        <button onClick={handleNewXlSheet}  className='rounded-lg h-8 w-36 mr-4 bg-green-800 font-semibold mb-1 text-slate-100'>New XL sheets</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </StandardLayout>
            </div>
        </>
    )
}

export default XlSheets