import React from "react";
import { ClientNav } from "../nav/ClientNav";
import retangle from '../../assets/image/Rectangle 32 (2).png'
import retangle1 from '../../assets/image/Group 122.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import autoCard from '../../assets/image/AutoCAD Logo.png'
import sketup from '../../assets/image/tempImagedMPmji 1.png'
import revit from '../../assets/image/tempImagek6h9Bp 1.png'
import bim from '../../assets/image/tempImageGiEZXn 1.png'
import myanmar from '../../assets/image/Myanmar  1.png'
import english from '../../assets/image/Screenshot 2025-09-15 at 16.01.32 1.png'
import civil from '../../assets/image/Civil 3D 1.png'
import nc from '../../assets/image/Navisworks logo 1.png'
import { RxDashboard } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa6";
import s3 from '../../assets/image/Rectangle 33.png'
import { Footer } from "../footers/Footer";
import {Link } from 'react-router-dom'
import { ClientFooter } from "../footers/ClientFooter";


export const Course = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="w-full">
                <ClientNav />
            </div>
            {/* Course Section 1 */}
            <section className="lg:px-[50px] px-[20px] py-[70px] bg-linear-to-b from-[#283342] to-[#47566a] w-full">
                <div className="w-full flex justify-between items-start lg:items-center mb-[50px]">
                    <h1 className="font-Poppins font-semibold text-white text-[14px] sm:text-[26px] w-[70%]">Welcome back, ready for your next lesson?</h1>
                    <h1 className="text-[#49BBBD] font-Poppins text-[13px] lg:text-[17px] font-semibold text-[#49BBBD">View History</h1>
                </div>
                <div className="w-full h-auto overflow-hidden">
                    <div className="flex gap-x-[40px] items-center w-[1000%]">
                        <div className="w-[350px] bg-white rounded-2xl py-[20px] px-[20px]">
                            <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-[20px]">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="font-Poppins font-semibold text-[17px] mb-[20px]">AUTOCAD Basic</h1>
                            <div className="flex items-center gap-x-[20px] mb-[20px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-medium font-Poppins">Kelly</h1>
                            </div>
                            <div className="w-full rounded-2xl h-[5px] bg-gray-400 mb-[25px]">
                                <div className="w-[70%] h-full bg-[#49BBBD]">
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <h1 className="text-black/50 font-Poppins  text-[15px]">Lesson 5 of 7</h1>
                            </div>
                        </div>
                        <div className="w-[350px] bg-white rounded-2xl py-[20px] px-[20px]">
                            <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-[20px]">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="font-Poppins font-semibold text-[17px] mb-[20px]">AUTOCAD Basic</h1>
                            <div className="flex items-center gap-x-[20px] mb-[20px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-medium font-Poppins">Kelly</h1>
                            </div>
                            <div className="w-full rounded-2xl h-[5px] bg-gray-400 mb-[25px]">
                                <div className="w-[70%] h-full bg-[#49BBBD]">
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <h1 className="text-black/50 font-Poppins  text-[15px]">Lesson 5 of 7</h1>
                            </div>
                        </div>
                        <div className="w-[350px] bg-white rounded-2xl py-[20px] px-[20px]">
                            <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-[20px]">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="font-Poppins font-semibold text-[17px] mb-[20px]">AUTOCAD Basic</h1>
                            <div className="flex items-center gap-x-[20px] mb-[20px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-medium font-Poppins">Kelly</h1>
                            </div>
                            <div className="w-full rounded-2xl h-[5px] bg-gray-400 mb-[25px]">
                                <div className="w-[70%] h-full bg-[#49BBBD]">
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <h1 className="text-black/50 font-Poppins  text-[15px]">Lesson 5 of 7</h1>
                            </div>
                        </div>
                        <div className="w-[350px] bg-white rounded-2xl py-[20px] px-[20px]">
                            <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-[20px]">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="font-Poppins font-semibold text-[17px] mb-[20px]">AUTOCAD Basic</h1>
                            <div className="flex items-center gap-x-[20px] mb-[20px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-medium font-Poppins">Kelly</h1>
                            </div>
                            <div className="w-full rounded-2xl h-[5px] bg-gray-400 mb-[25px]">
                                <div className="w-[70%] h-full bg-[#49BBBD]">
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <h1 className="text-black/50 font-Poppins  text-[15px]">Lesson 5 of 7</h1>
                            </div>
                        </div>
                        <div className="w-[350px] bg-white rounded-2xl py-[20px] px-[20px]">
                            <div className="w-full h-[180px] rounded-2xl overflow-hidden mb-[20px]">
                                <img src={retangle} alt="" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="font-Poppins font-semibold text-[17px] mb-[20px]">AUTOCAD Basic</h1>
                            <div className="flex items-center gap-x-[20px] mb-[20px]">
                                <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle1} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-medium font-Poppins">Kelly</h1>
                            </div>
                            <div className="w-full rounded-2xl h-[5px] bg-gray-400 mb-[25px]">
                                <div className="w-[70%] h-full bg-[#49BBBD]">
                                </div>
                            </div>
                            <div className="w-full flex justify-end items-center">
                                <h1 className="text-black/50 font-Poppins  text-[15px]">Lesson 5 of 7</h1>
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
            {/* Section 2 */}
            <section className="w-full lg:px-[50px] px-[20px] py-[70px] bg-linear-to-b from-[#666f7b] to-[#919dac]">
                <h1 className="font-Poppins text-white font-semibold text-[20px] lg:text-[30px] mb-[60px]">Choice favourite course from top category</h1>
                <div className="w-full h-auto justify-between gap-[30px] flex flex-wrap justify-evenly mb-[30px]">
                    <Link to='/Course/AutoCAD' className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all duration-150 h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={autoCard} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-red-500 mt-[5px] mb-[25px]">AutoCAD</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={sketup} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-[#414141] mt-[5px] mb-[25px]">SketchUp</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={revit} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-[#3469F5] mt-[5px] mb-[25px]">Revit</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={bim} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-black mt-[5px] mb-[25px]">BIM 01</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={english} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-black mt-[5px] mb-[25px]">English 4 Skills</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={myanmar} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-black mt-[5px] mb-[25px]">Burmese 4 Skills</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={civil} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-[#9B2379] mt-[5px] mb-[25px]">Civil 3D</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                    <Link className="w-[300px] hover:shadow-[2px_2px_20px_gray] transition-all h-[350px] px-[20px] py-[20px] bg-white shadow-[0px_0.8px_10px_#eaeaea] rounded-2xl cursor-pointer">
                        <div className="m-auto w-[100px] overflow-hidden">
                            <img src={nc} alt="" className="w-full h-full" />
                        </div>
                        <h1 className="text-center font-bold font-Poppins text-[23px] text-[#3369F6] mt-[5px] mb-[25px]">NavisWorks</h1>
                        <p className="text-center text-[#696984] w-[200px] m-auto">2D/3D Modeling with assignment projects.</p>
                    </Link>
                </div>
            </section>
            {/* Course Section 3 */}
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
                                        <img src={retangle1} alt="" className="w-full h-full object-cover" />
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
            {/* Footer */}
            <ClientFooter/>
        </div>
    )
}