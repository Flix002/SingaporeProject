import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const ClientNav = () => {
    return (
        <div className="w-full h-[100px] lg:h-[90px] flex lg:px-[30px] bg-[#1b1b1b] justify-between items-center">
            <div className="w-[70px] h-[70px] rounded-[50%] flex justify-center items-center hidden lg:flex">
                <h1 className="font-Lexend font-semibold cursor-pointer text-[#d8d8d8]">K-Hub</h1>
            </div>
            <div className="w-17.5 h-17.5 flex justify-center items-center lg:hidden cursor-pointer group">
                <FaRegUserCircle className="text-[30px] text-black  group-active:text-red-600" />
            </div>
            <div className="w-auto h-auto relative cursor-pointer rounded-[40px] hidden lg:block">
                <div className="w-[600px] h-17.5 bg-transparent">
                    <div className="w-full h-full flex justify-evenly gap-x-[20px] items-center">
                        <div>
                            <Link to='/' className="font-medium text-[18px] select-none font-Poppins font-semibold text-white transition-all duration-150 cNavTag relative">Home</Link>
                        </div>
                        <div className="flex gap-x-[5px] items-center">
                            <Link to='/Course' className="font-medium text-[18px] select-none font-Poppins font-semibold text-white transition-all duration-150 cNavTag relative">Course</Link>
                            <MdOutlineKeyboardArrowDown className="text-white text-[30px]"/>
                        </div>
                        <div>
                            <Link to='/Blog' className="font-medium text-[18px] select-none font-Poppins font-semibold text-white transition-all duration-150 cNavTag relative">Blog</Link>
                        </div>
                        <div className="w-17.5 h-17.5 rounded-[50%] flex justify-center items-center hidden lg:flex">
                            <Link to='/LoginForm'>
                                <FaRegUserCircle className="text-[30px] text-[#c9c9c9] cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-17.5 h-17.5 flex justify-center items-center cursor-pointer lg:hidden group">
                <FaBars className="text-[30px] text-[#313131] group-active:text-red-600" />
            </div>
        </div>
    )
}