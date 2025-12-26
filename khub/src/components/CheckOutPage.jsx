import React from "react";
import { ClientNav } from "./nav/ClientNav";
import kbz from '../assets/image/images.jfif'
import wave from '../assets/image/Wave Money.png'
import cb from '../assets/image/CB Pay.png'
import qr from '../assets/image/Group 454.png'
import dd from '../assets/image/Rectangle 33.png'
import { ClientFooter } from "./footers/ClientFooter";

const CheckOutPage = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="w-full">
                <ClientNav />
            </div>
            <section className="flex justify-evenly items-center bg-linear-to-b from-[#283342] to-[#47566a] py-[50px]">
                <div className="w-[700px] auto bg-white rounded-2xl py-[50px] px-[30px]">
                    <div>
                        <h1 className="text-black font-semibold text-[30px] font-Lexend">Checkout</h1>
                        <p className="text-[20px] text-[#676767] font-Lexend ">Payment Method</p>
                    </div>
                    <div className="w-full mt-[40px] flex justify-center items-center gap-x-[30px]">
                        <div className="w-[150px] h-[80px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src={kbz} alt="" className="w-full h-full"/>
                        </div>
                        <div className="w-[150px] h-[80px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src={wave} alt="" className="w-full h-full"/>
                        </div>
                        <div className="w-[150px] h-[80px] rounded-2xl overflow-hidden cursor-pointer">
                            <img src={cb} alt="" className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center items-center mt-[50px]">
                        <div className="w-[300px] ">
                            <img src={qr} alt="" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="w-[500px] bg-gray-400 rounded-2xl py-[30px] px-[30px]">
                        <h1 className="text-[20px]">Summary</h1>
                        <div className="w-full mt-[30px]">
                            <div className="flex gap-x-[20px] items-center mt-[20px]">
                                <div className="w-[100px] h-auto">
                                    <img src={dd} alt="" />
                                </div>
                                <div>
                                    <h1>AutoCAD 2D Course</h1>
                                    <p className="text-[#696984]">Master the essentials of...</p>
                                    <h1 className="">$80.00</h1>
                                </div>
                            </div>
                            <div className="flex gap-x-[20px] items-center mt-[20px]">
                                <div className="w-[100px] h-auto">
                                    <img src={dd} alt="" />
                                </div>
                                <div>
                                    <h1>AutoCAD 2D Course</h1>
                                    <p className="text-[#696984]">Master the essentials of...</p>
                                    <h1 className="">$80.00</h1>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <div className="flex justify-between items-center border-b border-black">
                                    <h1 className='text-gray-800'>Subtotal</h1>
                                    <h1 className='text-gray-800'>$160.00</h1>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <div className="flex justify-between items-center border-b border-black">
                                    <h1 className='text-gray-800'>Coupon Discount</h1>
                                    <h1 className='text-gray-800'>0%</h1>
                                </div>
                            </div>
                            <div className="mt-[30px]">
                                <div className="flex justify-between items-center border-b border-black">
                                    <h1 className='text-gray-800'>TAX</h1>
                                    <h1 className='text-gray-800'>5</h1>
                                </div>
                            </div> 
                            <div className="mt-[30px]">
                                <div className="flex justify-between items-center border-b border-black">
                                    <h1 className="font-semibold text-black">Total</h1>
                                    <h1 className="font-semibold text-black">$165.00</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-[30px] flex gap-x-[20px] items-end">
                        <div className="w-[200px] h-[200px] rounded-2xl bg-white flex justify-center items-center">
                            <h1 className="text-white p-[5px_10px] cursor-pointer rounded-2xl bg-[#099CE0] text-[15px]">Upload Screenshot </h1>
                        </div>
                        <div className="flex gap-x-[20px]">
                            <div className="w-[120px] h-[40px] rounded-2xl bg-red-600 flex justify-center items-center cursor-pointer">
                                <h1>Delete</h1>
                            </div>
                            <div className="w-[120px] h-[40px] rounded-2xl bg-[#49BBBD] flex justify-center items-center cursor-pointer">
                                <h1>Submit</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientFooter/>
        </div>
    )
}

export default CheckOutPage;