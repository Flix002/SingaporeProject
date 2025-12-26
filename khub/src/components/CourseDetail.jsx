import React from "react";
import { ClientNav } from "./nav/ClientNav";
import retangle77 from '../assets/image/Rectangle 77.png'
import { FaStar } from "react-icons/fa";
import retangle1 from '../assets/image/Group 122.png'
import { FaRegClock } from "react-icons/fa";
import group from '../assets/image/Group 281.png'
import retangle2 from '../assets/image/Group 122.png'
import s3 from '../assets/image/Rectangle 33.png'
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ClientFooter } from "./footers/ClientFooter";


export const CourseDetail = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="w-full">
                <ClientNav />
            </div>
            <div className="w-full h-[500px]">
                <img src={retangle77} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-auto flex justify-evenly bg-linear-to-b from-[#6d6d6d] to-[#878787] py-[30px]">
                <div className="flex flex-col items-end">
                    <div className=" flex justify-center gap-x-[20px] ">
                        <div className="w-[180px] h-[55px] bg-[#383838] rounded-2xl cursor-pointer flex justify-center items-center">
                            <h1 className="text-white font-semibold">Write a Review</h1>
                        </div>
                        <div className="w-[180px] h-[55px] bg-[#49BBBD] rounded-2xl cursor-pointer flex justify-center items-center">
                            <h1 className="text-white font-semibold">Overview</h1>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-evenly mt-[50px]">
                        <div className="w-[700px] h-[500px] bg-[#9DCCFF]/30 rounded-2xl p-[30px] ">
                            <div className="flex justify-between">
                                <div className="w-[180px] h-[150px] bg-white p-[20px] rounded-2xl">
                                    <h1 className="text-center text-gray-500 font-semibold text-[20px]">4 out of 5</h1>
                                    <div className="flex w-full mt-[20px] justify-center gap-x-[10px] items-center">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <p className="text-center mt-[20px] text-gray-500">Top Rating</p>
                                </div>
                                <div className="flex flex-col gap-y-[15px]">
                                    <div className="flex gap-x-[20px] items-center">
                                        <h1 className="text-black">5 Stars</h1>
                                        <div className="w-[270px] h-[5px] bg-white rounded-2xl">
                                            <div className="w-[60%] h-full bg-[#49BBBD]">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-[20px] items-center">
                                        <h1 className="text-black">4 Stars</h1>
                                        <div className="w-[270px] h-[5px] bg-white rounded-2xl">
                                            <div className="w-[60%] h-full bg-[#49BBBD]">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-[20px] items-center">
                                        <h1 className="text-black">2 Stars</h1>
                                        <div className="w-[270px] h-[5px] bg-white rounded-2xl">
                                            <div className="w-[60%] h-full bg-[#49BBBD]">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-x-[20px] items-center">
                                        <h1 className="text-black">1 Stars</h1>
                                        <div className="w-[270px] h-[5px] bg-white rounded-2xl">
                                            <div className="w-[60%] h-full bg-[#49BBBD]">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[40px] w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="">
                                        <div className="flex gap-x-[10px]">
                                            <div className="w-[50px] h-[50px] overflow-hidden bg-gray-400 flex rounded-[50%] justify-center items-baseline">
                                                <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h1 className="text-[17px]">Kelly</h1>
                                                <div className="flex gap-[5px] mt-[10px]">
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-[20px]">
                                            <p>This is rating for each course written by each students.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[20px]">
                                        <FaRegClock className="text-white text-[20px]" />
                                        <p className="text-white">3 Hours</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full mt-[30px]">
                                    <div className="">
                                        <div className="flex gap-x-[10px]">
                                            <div className="w-[50px] h-[50px] overflow-hidden bg-gray-400 flex rounded-[50%] justify-center items-baseline">
                                                <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h1 className="text-[17px]">Kelly</h1>
                                                <div className="flex gap-[5px] mt-[10px]">
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                    <FaStar className="text-yellow-500 text-[12px]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-[20px]">
                                            <p>This is rating for each course written by each students.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-[20px]">
                                        <FaRegClock className="text-white text-[20px]" />
                                        <p className="text-white">3 Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[300px]">
                    <img src={group} alt="" />
                </div>
            </div>
            <section className="w-full lg:px-[50px] px-[20px] py-[70px] bg-linear-to-b from-[#283342] to-[#47566a]">
                <div className="w-full flex justify-between items-start lg:items-center mb-[50px]">
                    <h1 className="font-Poppins font-semibold text-white text-[14px] sm:text-[26px] w-[70%]">Recommendend Courses</h1>
                    <h1 className="text-[#49BBBD] font-Poppins text-[13px] lg:text-[17px] font-semibold text-[#49BBBD">See all</h1>
                </div>
                <div className="w-full overflow-hidden">
                    <div className=" flex w-[10000%] h-[600px] flex items-center gap-x-[40px]">
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px] group-hover:">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={s3} alt="" className="w-full h-full object-cover" />
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
                                        <img src={retangle2} alt="" className="w-full h-full object-cover" />
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
                                <img src={s3} alt="" className="w-full h-full object-cover" />
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
                                        <img src={retangle2} alt="" className="w-full h-full object-cover" />
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
                                <img src={s3} alt="" className="w-full h-full object-cover" />
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
                                        <img src={retangle2} alt="" className="w-full h-full object-cover" />
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
                                <img src={s3} alt="" className="w-full h-full object-cover" />
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
                                        <img src={retangle2} alt="" className="w-full h-full object-cover" />
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
                                <img src={s3} alt="" className="w-full h-full object-cover" />
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
                                        <img src={retangle2} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <h1 className="font-Poppins text-black font-semibold text-[15px]">Kelly</h1>
                                </div>
                                <div className="">
                                    <h1 className="text-[20px] font-Poppins font-bold text-[#49BBBD] cursor-pointer">$ 80</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center md:justify-end items-center mt-[40px]">
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
            <ClientFooter/>
        </div>
    )
}