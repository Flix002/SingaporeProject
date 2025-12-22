import React from "react";
import { ClientNav } from "../../nav/ClientNav";
import AutoCad from '../../../assets/image/AutoCAD Logo.png'
import retangle from '../../../assets/image/Rectangle 33.png'
import retangle1 from '../../../assets/image/Group 122.png'
import { RxDashboard } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Footer } from "../../Footer";


export const AutoCAD = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="w-full">
                <ClientNav />
            </div>
            {/* Autocad Section 1 */}
            <section className="w-full bg-[#9DCCFF]/40 px-[20px] lg:px-[30px] py-[30px]">
                <div className="w-full flex justify-center items-center h-auto mb-[90px] ">
                    <div className="flex w-full md:w-[900px] bg-white py-[20px] rounded-[20px] px-[60px] gap-y-[20px] sm:gap-y-0 flex-col sm:flex-row justify-center items-center sm:gap-x-[40px] lg:gap-x-[90px]">
                        <div className="flex justify-center w-[100px] h-[100px] overflow-hidden">
                            <img src={AutoCad} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="text-[#D23152] text-[25px] font-Lexend font-bold mb-[10px] text-center sm:text-start">AutoCAD</h1>
                            <p className="font-Lexend text-[#D23152] font-bold text-[15px] text-center sm:text-start">Professional Computer-Aided Design Software used to create precise 2D drawings and 3D models.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center h-auto">
                    <div className="w-full md:w-[1000%] flex justify-center sm:justify-start sm:items-start flex-col items-center sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[50px] ">
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard />
                                    <h1 className="font-Poppins text-gray-500">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock />
                                    <h1 className="text-gray-500">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard />
                                    <h1 className="font-Poppins text-gray-500">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock />
                                    <h1 className="text-gray-500">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard />
                                    <h1 className="font-Poppins text-gray-500">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock />
                                    <h1 className="text-gray-500">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard />
                                    <h1 className="font-Poppins text-gray-500">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock />
                                    <h1 className="text-gray-500">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard />
                                    <h1 className="font-Poppins text-gray-500">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock />
                                    <h1 className="text-gray-500">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[330px] bg-[#252641] h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] relative">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="mt-[20px] flex justify-between items-center">
                                <div className="flex items-center gap-x-[10px]">
                                    <RxDashboard className="text-white" />
                                    <h1 className="font-Poppins text-gray-500 text-white">Design</h1>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <FaRegClock className="text-white" />
                                    <h1 className="text-gray-500 text-white">3 Month</h1>
                                </div>
                            </div>
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AUTO CAD 2D Course</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Master the essentials of AutoCAD 2D with step-by step guidance.
                                Learn to create professional drawings with precision and ease.</p>
                            <div className="w-full mt-[30px] flex justify-between items-center">
                                <div className="flex gap-x-[10px] items-center">
                                    <div className="w-[35px]  h-[35px] rounded-[50%] overflow-hidden bg-gray-500 cursor-pointer">
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px] text-white">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                            <div className="absolute left-0 top-[-20px] ">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end items-center mt-[80px] mb-[50px]">
                    <div className="flex items-center gap-x-[20px]">
                        <div className="flex justify-center items-center w-[50px] h-[50px] group hover:bg-black transition-all duration-150 active:bg-red-700 bg-[#49BBBD] rounded-[5px] cursor-pointer">
                            <MdKeyboardArrowLeft className="text-white text-[30px]" />
                        </div>
                        <div className="flex justify-center items-center w-[50px] h-[50px] group hover:bg-black transition-all duration-150 active:bg-red-700 bg-[#49BBBD] rounded-[5px] cursor-pointer">
                            <MdKeyboardArrowRight className="text-white text-[30px]" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer/>
        </div>
    )
}