import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


export const ClientNav = () => {
    return (
        <div className="w-full h-[120px] bg-gray-500 flex px-[30px] justify-between items-center">
            <div className="flex justify-center items-center w-auto h-auto">
                <div className="w-[70px] h-[70px] rounded-[50%] overflow-hidden bg-white flex justify-center items-center">
                    <h1 className="text-black font-semibold text-5 ">K Hub</h1>
                </div>
            </div>
            <div className="w-auto h-auto relative cursor-pointer rounded-[40px] shadow-[0.2px_0.2px_10px_black] backdrop-blur-[20px]">
                <div className="w-[300px] h-[70px] bg-transparent">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1 className="font-medium text-[18px] select-none">Home</h1>
                    </div>
                </div>
                <div className="absolute right-[20px] transformYCenter overflow-hidden">
                    <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden flex justify-center items-center bg-gray-400 outline-0">
                        <MdKeyboardArrowDown className="text-black text-[24px] " />
                    </div>
                </div>
            </div>
            <div className="justify-center items-center w-auto h-auto lg:flex hidden">
                <div className="w-[70px] h-[70px] rounded-[50%] overflow-hidden bg-white flex justify-center items-center">
                    <FaRegUserCircle className="text-[30px] text-black"/>
                </div>
            </div>
        </div>
    )
}