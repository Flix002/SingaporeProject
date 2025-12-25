import React from "react";
import group111 from '../../assets/image/Group 111.png'

export const ClientFooter = () => {
    return (
        <footer className="w-full h-[800px] bg-[#252641] relative">
            <div className="w-full h-[50%] flex justify-center items-center gap-x-[30px]">
                <div className="w-[80px] h-[80px]">
                    <img src={group111} alt="" className="w-full h-full " />
                </div>
                <hr className="w-[1px] h-[80px] bg-gray-400" />
                <div className="w-[80px]">
                    <h1 className="font-Poppins text-white font-semibold">Virtual Class for Zoom</h1>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div>
                    <h1 className="font-semibold text-[#B2B3CF] text-center tracking-[2px]">Subscribe to get our Newsletter</h1>
                    <form className="flex gap-x-[20px] items-center text-center mt-[20px]">
                        <input type="email" className="text-[18px] px-[30px] text-black border-[0.3px] w-[300px] h-[55px] border-[#83839A] rounded-[30px]" placeholder="Your Email"/>
                        <button className="font-semibold text-white w-[180px] h-[55px] bg-[#49BBBD] rounded-[30px] cursor-pointer">Subscribe</button>
                    </form>
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