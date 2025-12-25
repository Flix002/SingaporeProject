import React from "react";
import { FaCheck } from "react-icons/fa";


const MememberShip = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="min-h-screen w-full relative">
                {/* Radial Gradient Background from Bottom */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
                    }}
                />
                {/* Your Content/Components */}
                <div className="w-full h-screen flex justify-center items-center relative">
                    <div>
                        <h1 className="text-black font-Lexend text-center font-semibold text-[40px] mb-[30px]">Affordable pricing</h1>
                        <div className="flex gap-x-[60px]">
                            <div className="flex gap-x-[30px] justify-center items-start cursor-pointer group">
                                <div className="w-[400px] h-[500px] bg-white shadow-[1px_1px_5px_#5f5f5f] rounded-2xl px-[20px] py-[30px]">
                                    <p className="font-bold text-[#49BBBD] font">Starter</p>
                                    <h1 className=" mt-[20px] text-[40px] font-bold font-Lexend">Free <span className="uppdercase text-[20px] font-semibold">/ Forever</span></h1>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Free 2 Courses</h1>
                                    </div>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Zoom Course Request</h1>
                                    </div>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Search for Courses suitable for you</h1>
                                    </div>
                                    <div className="mt-[90px] w-[200px] h-[60px] rounded-[20px] bg-transparent flex justify-center items-center m-auto cursor-pointer group-hover:bg-[#49BBBD] hover:bg-[#49BBBD] group transition-all">
                                        <h1 className="font-semibold font-Lexend text-[#49BBBD] group-hover:text-white transition-all duration-150">Try For Free</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-[30px] justify-center items-start cursor-pointer group">
                                <div className="w-[400px] h-[500px] bg-white shadow-[1px_1px_5px_#5f5f5f] rounded-2xl px-[20px] py-[30px]">
                                    <p className="font-bold text-[#49BBBD] font">Starter</p>
                                    <h1 className=" mt-[20px] text-[40px] font-bold font-Lexend">Free <span className="uppdercase text-[20px] font-semibold">/ Forever</span></h1>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Free 2 Courses</h1>
                                    </div>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Zoom Course Request</h1>
                                    </div>
                                    <div className="flex items-center gap-x-[20px] mt-[30px]">
                                        <div className="p-[10px] bg-gray-300 rounded-[50%]">
                                            <FaCheck className="text-[13px]" />
                                        </div>
                                        <h1 className="font-Lexend text-[#2D3436]">Search for Courses suitable for you</h1>
                                    </div>
                                    <div className="mt-[90px] w-[200px] h-[60px] rounded-[20px] bg-transparent flex justify-center items-center m-auto cursor-pointer group-hover:bg-[#49BBBD] hover:bg-[#49BBBD] group transition-all">
                                        <h1 className="font-semibold font-Lexend text-[#49BBBD] group-hover:text-white transition-all duration-150">Try For Free</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MememberShip;