import React from "react";
import group111 from '../assets/image/Group 111.png'

export const Footer = () => {
    return (
        <footer className="w-full h-[500px] bg-[#252641] relative">
            <div className="w-full h-[50%] flex justify-center items-center gap-x-[30px]">
                <div className="w-[80px] h-[80px]">
                    <img src={group111} alt="" className="w-full h-full " />
                </div>
                <hr className="w-[1px] h-[80px] bg-gray-400" />
                <div className="w-[80px]">
                    <h1 className="font-Poppins text-white font-semibold">Virtual Class for Zoom</h1>
                </div>
            </div>
            <div className="w-full flex h-[30%] flex-col md:flex-row items-center justify-center gap-y-[20px] md:gap-y-0 gap-x-[50px] font-Poppins">
                <h1 className="text-[#B2B3CF]">Careers</h1>
                <hr className="w-[1px] hidden md:block h-[20px] bg-[#B2B3CF]" />
                <h1 className="text-[#B2B3CF]">Privacy Policy</h1>
                <hr className="w-[1px] hidden md:block h-[20px] bg-[#B2B3CF]" />
                <h1 className="text-[#B2B3CF]">Terms & Conditions</h1>
            </div>
            <div className="m-auto flex justify-center items-center absolute bottom-[10px] transformXCenter">
                <h1 className="text-[#B2B3CF] font-Poppins text-[17px]">@2025 K-Hub</h1>
            </div>
        </footer>
    )
}