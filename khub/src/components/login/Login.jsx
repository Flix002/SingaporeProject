import React from "react";
import retangle from '../../assets/image/Rectangle 334.png'


const LoginForm = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden ">
            <div className="min-h-screen w-full relative bg-black flex justify-center items-center">
                {/* Violet Storm Background with Top Glow */}
                <div
                    className="absolute  inset-0 z-0 flex justify-center items-center"
                    style={{
                        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
                    }}
                />
                {/* Your Content/Components */}
                <div className="w-[1000px] h-[600px] overflow-hidden flex-row-reverse flex justify-between bg-white/10 backdrop-blur-[20px] border-[0.1px] border-white rounded-2xl items-center">
                    {/* Sigin in Form  */}
                    <div className="w-[50%] h-full bg-gray-600/20 px-[20px] py-[20px]">
                        <h1 className="text-white text-center font-bold text-[20px]">Welcome to <span className="text-blue-500">K_HUB</span></h1>
                        <p className="mt-[15px] text-white text-center font-semibold font-Lexend">Sign in to K_hub to explore the full potential for your  Future</p>
                        <form action="" className="mt-[30px]">
                            <div>
                                <label htmlFor="username" className="text-white font-Lexend">UserName</label>
                                <input type="text" id="username" className="w-full font-semibold h-[50px] bg-white/30 rounded-2xl px-[30px] outline-0  mt-[10px]" placeholder="Ender your username"/>
                            </div>
                            <div className="mt-[20px]">
                                <label htmlFor="email" className="text-white font-Lexend">Email</label>
                                <input type="email" id="email" className="w-full font-semibold h-[50px] bg-white/30 rounded-2xl px-[30px] outline-0  mt-[10px]" placeholder="Ender your Email"/>
                            </div>
                            <div className="mt-[20px]">
                                <label htmlFor="password" className="text-white font-Lexend">Password</label>
                                <input type="password" id="password" className="w-full font-semibold h-[50px] bg-white/30 rounded-2xl px-[30px] outline-0  mt-[10px]" placeholder="Ender your Password"/>
                            </div>
                            <div className="mt-[20px] w-full flex justify-between items-center px-[10px]">
                                <div className="flex items-center gap-x-[10px]">
                                    <input type="checkbox" className="cursor-pointer w-[15px] h-[15px]" id="rememberme"/>
                                    <label htmlFor="rememberme" className="font-sans text-[17px] text-blue-700 select-none cursor-pointer">Remember Me</label>
                                </div>
                                <div>
                                    <h1 className="text-white cursor-pointer">Forgot password?</h1>
                                </div>
                            </div>
                            <div className="w-full mt-[20px] flex justify-center items-center">
                                <div className="w-[200px] h-[50px] flex justify-center items-center font-Lexend  bg-linear-to-r from-[#a1a1a1] to-[#7A89EB] rounded-[40px] cursor-pointer hover:bg-linear-to-l transition-all duration-300">
                                    <h1>Sign In</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[50%]">
                        <img src={retangle} alt="" className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginForm;