import React from 'react'
import { SearchIcon } from '../Icons/Icons.jsx'

function Serach() {
    return (
        <>
            <div className=" flex border border-white">
                <div className=" m-1 ">
                        {/* Search icon */}
                    <SearchIcon/>
                </div>
                    <input type="text" placeholder='Search' className='h-7 pl-3 border  rounded-l-lg w-60 outline-none ' />
            </div>
        </>
    )
}

export default Serach