import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6"


export const ClientNav = () => {
    return (
        <div className="w-full h-[100px] lg:h-[90px] flex lg:px-[30px] justify-between items-center">
            <div className="w-[70px] h-[70px] rounded-[50%] flex justify-center items-center hidden lg:flex">
                <h1 className="font-Lexend font-semibold cursor-pointer text-[#313131]">K-Hub</h1>
            </div>
            <div className="w-17.5 h-17.5 flex justify-center items-center lg:hidden cursor-pointer group">
                <FaRegUserCircle className="text-[30px] text-black  group-active:text-red-600" />
            </div>
            <div className="w-auto h-auto relative cursor-pointer rounded-[40px] hidden lg:block">
                <div className="w-[600px] h-17.5 bg-transparent">
                    <div className="w-full h-full flex justify-evenly gap-x-[20px] items-center">
                        <div>
                            <Link to='/' className="font-medium text-[18px] select-none font-Poppins font-semibold text-[#313131] hover:text-blue-500 transition-all duration-150">Home</Link>
                        </div>
                        <div>
                            <Link to='/Blog' className="font-medium text-[18px] select-none font-Poppins font-semibold text-[#313131] hover:text-blue-500 transition-all duration-150">Blog</Link>
                        </div>
                        <div>
                            <Link to='/Course' className="font-medium text-[18px] select-none font-Poppins font-semibold text-[#313131] hover:text-blue-500 transition-all duration-150">Course</Link>
                        </div>
                        <div>
                            <Link to='/' className="font-medium text-[18px] select-none font-Poppins font-semibold text-[#313131] hover:text-blue-500 transition-all duration-150">Search</Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-17.5 h-17.5 rounded-[50%] flex justify-center items-center hidden lg:flex">
                <FaRegUserCircle className="text-[30px] text-[#313131] cursor-pointer" />
            </div>
            <div className="w-17.5 h-17.5 flex justify-center items-center cursor-pointer lg:hidden group">
                <FaBars className="text-[30px] text-[#313131] group-active:text-red-600" />
            </div>
        </div>
    )
}