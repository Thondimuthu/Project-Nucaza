import { useState, useEffect } from 'react';
import { SearchIcon } from '../../assets/SVGImage/Header/Icons.jsx'
import StandardLayout from '../../Layout/StandardLayout.jsx'
import { RiFileExcel2Line } from "react-icons/ri";

function XlSheets() {
    const [recentFiles, setRecentFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecentFiles();
    }, []);

    const fetchRecentFiles = async () => {
        try {
            const response = await fetch('/api/excel-files/recent');
            if (!response.ok) {
                throw new Error('Failed to fetch recent files');
            }
            const data = await response.json();
            setRecentFiles(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

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
                                <div className="flex items-center mr-5 border mb-1">
                                    <span className='font-black pl-1'><SearchIcon /></span>
                                    <input className='h-7 mr-3 outline-none pl-3' type="text" placeholder='Search XL sheets' />
                                </div>
                                <div>
                                    <button onClick={handleNewXlSheet} className='rounded-lg h-8 w-36 mr-4 bg-green-800 font-semibold mb-1 text-slate-100'>New XL sheets</button>
                                </div>
                            </div>
                        </div>

                        {/* Recently Added Files */}
                        <div className="bg-white mt-4 p-4 rounded-lg shadow">
                            <h2 className="text-lg font-semibold mb-4">Recently Added Excel Files</h2>
                            {loading ? (
                                <div className="text-center py-4">Loading...</div>
                            ) : error ? (
                                <div className="text-red-500 text-center py-4">{error}</div>
                            ) : (
                                <div className="grid gap-4">
                                    {recentFiles.map(file => (
                                        <div key={file.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-gray-200">
                                            <div className="flex items-center">
                                                <RiFileExcel2Line className="text-green-600 text-2xl mr-3" />
                                                <div>
                                                    <h3 className="font-medium">{file.name}</h3>
                                                    <p className="text-sm text-gray-500">Last modified: {file.lastModified}</p>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500">{file.size}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </StandardLayout>
            </div>
        </>
    )
}

export default XlSheets