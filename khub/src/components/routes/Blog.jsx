import React from "react";
import { ClientNav } from "../nav/ClientNav";
import retangle from '../../assets/image/Rectangle 32.png'
import retangle1 from '../../assets/image/Rectangle 19.png'
import retangle2 from '../../assets/image/Group 122.png'
import { IoEyeSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import retangle3 from '../../assets/image/Rectangle 33.png'
import { RxDashboard } from "react-icons/rx";
import { FaRegClock } from "react-icons/fa6";
import retangle4 from '../../assets/image/Rectangle 34.png'
import retangle5 from '../../assets/image/Rectangle 42.png'
import { Footer } from "../footers/Footer";
import { ClientFooter } from "../footers/ClientFooter";


const Blog = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden ">
            <div className="w-full">
                <ClientNav />
            </div>
            {/* Blog Section 1 */}
            <section className="w-full h-auto py-[80px] gap-y-[70px] lg:h-[600px] bg-[#9DCCFF]/40 flex flex-col lg:flex-row lg:justify-evenly justify-between items-center">
                <div className="w-full lg:w-[45%] h-auto px-[20px] lg:px-0">
                    <p className="font-Poppins text-black text-[20px] mb-[25px] text-center lg:text-start">By Themadbrains in <span className="text-[#49BBBD] font-semibold font-Poppins">inspiration</span></p>
                    <h1 className="text-[#2F327D] mb-[30px] font-Poppins font-bold lg:text-[44px] text-[30px] text-center lg:text-start">Why TAKUMI UI Should Be on the Radar of Every Mobile Developer</h1>
                    <p className="font-Poppins text-[#696984] tracking-[2px] leading-[30px] text-center lg:text-start mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <div className="w-full h-auto flex justify-center items-center lg:justify-start">
                        <div className="w-[200px] h-[60px] flex justify-center items-center bg-[#49BBBD] rounded-[20px] cursor-pointer hover:bg-black transition-all duration-250">
                            <h1 className="font-Poppins text-white font-medium text-[15px] select-none">start learning now</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[45%] h-[400px] lg:h-[450px] px-[20px] flex justify-center lg:block">
                    <div className="w-full h-full  rounded-2xl overflow-hidden">
                        <img src={retangle} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            {/* Blog Section 2 */}
            <section className="w-full h-auto bg-[#9DCCFF]/40 px-[20px] lg:px-[90px] py-[80px]">
                <div className="flex justify-between items-center w-full h-auto mb-[50px]">
                    <h1 className="font-Poppins text-black text-[25px] font-semibold">Free Course</h1>
                    <h1 className="font-Poppins font-semibold text-[20px] text-[#49BBBD] cursor-pointer">See all</h1>
                </div>
                <div className="w-full h-auto flex items-center overflow-hidden">
                    <div className="w-full h-auto flex justify-center md:justify-between gap-x-[30px] 2xl:justify-evenly">
                        <div className="w-[600px] bg-white h-auto py-[35px] px-[20px] rounded-2xl cursor-pointer group ">
                            <div className="w-full h-[270px] overflow-hidden rounded-2xl">
                                <img src={retangle1} alt="" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-150" />
                            </div>
                            <h1 className="text-black font-Poppins mt-[30px] font-black">Basic English Course</h1>
                            <div className="flex gap-x-[20px] items-center mt-[50px]">
                                <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle2} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-semibold font-Poppins text-gray-700">Kelly</h1>
                            </div>
                            <p className="font-Poppins text-[#696984] tracking-[2px] mt-[30px]">“Master everyday English with ease- Start your Basic English Journey Today!”</p>
                            <div className="flex justify-end gap-x-[15px] items-center w-full h-auto mt-[40px]">
                                <IoEyeSharp className="text-[20px] text-[#49BBBD]" />
                                <p className="text-[#696984] ">251,232</p>
                            </div>
                        </div>
                        <div className="w-[600px] hidden md:block bg-white h-auto py-[35px] px-[20px] rounded-2xl cursor-pointer group">
                            <div className="w-full h-[270px] overflow-hidden rounded-2xl">
                                <img src={retangle1} alt="" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-150" />
                            </div>
                            <h1 className="text-black font-Poppins mt-[30px] font-black">Basic English Course</h1>
                            <div className="flex gap-x-[20px] items-center mt-[50px]">
                                <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden bg-gray-500">
                                    <img src={retangle2} alt="" className="w-full h-full object-cover" />
                                </div>
                                <h1 className="font-semibold font-Poppins text-gray-700">Kelly</h1>
                            </div>
                            <p className="font-Poppins text-[#696984] tracking-[2px] mt-[30px]">“Master everyday English with ease- Start your Basic English Journey Today!”</p>
                            <div className="flex justify-end gap-x-[15px] items-center w-full h-auto mt-[40px]">
                                <IoEyeSharp className="text-[20px] text-[#49BBBD]" />
                                <p className="text-[#696984] ">251,232</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px] w-full flex justify-center lg:justify-end">
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
            {/* Blog Section 3 */}
            <section className="w-full h-auto bg-[#9DCCFF]/40 px-[20px] lg:px-[90px] pt-[80px] pb-[130px]">
                <div className="flex justify-between items-start lg:items-center w-full h-auto mb-[50px]">
                    <h1 className="font-Poppins text-black text-[20px] w-[200px] lg:text-[25px] font-semibold">Recommended Courses for you</h1>
                    <h1 className="font-Poppins font-semibold text-[20px] text-[#49BBBD] cursor-pointer">See all</h1>
                </div>
                <div className="w-full overflow-hidden">
                    <div className=" flex w-[10000%] h-[600px] flex items-center gap-x-[40px] mb-[30px]">
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px]">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle3} alt="" className="w-full h-full object-cover" />
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
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AWS Certified solutions Architect</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px]">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle4} alt="" className="w-full h-full object-cover" />
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
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AWS Certified solutions Architect</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px]">
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
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AWS Certified solutions Architect</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px]">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle5} alt="" className="w-full h-full object-cover" />
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
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AWS Certified solutions Architect</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
                        <div className="w-[330px] bg-white h-auto rounded-2xl overflow-hidden py-[35px] px-[20px]">
                            <div className="w-full h-[200px] rounded-2xl overflow-hidden">
                                <img src={retangle1} alt="" className="w-full h-full object-cover" />
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
                            <h1 className="font-Poppins text-[#252641] font-semibold text-[20px] mt-[15px]">AWS Certified solutions Architect</h1>
                            <p className="mt-[20px] font-Poppins text-gray-400">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
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
                    <div>
                        
                    </div>
                </div>
            </section>
            {/* Footer */}
            <ClientFooter/>
        </div>
    )
}

export default Blog;