import { ClientNav } from "./ClientNav";
import { FaClipboardList } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import learningPageImg from '../assets/image/Rectangle 323.png'
import forInstructors from '../assets/image/Rectangle 19.png'
import forStudent from '../assets/image/Rectangle 21.png'
import section4img from '../assets/image/confident-teacher-explaining-lesson-pupils 1.png'
import { FaCirclePlay } from "react-icons/fa6";
import onlineZoom from '../assets/image/Rectangle 32.png'
import DashIcon from '../assets/icons/Group 72.png'
import advice from '../assets/icons/Group 73.png'
import group122 from '../assets/image/Group 122.png'
import group92 from '../assets/image/Group 92.png'
import group124 from '../assets/image/Group 124.png'
import group106 from '../assets/image/Group 106.png'
import group111 from '../assets/image/Group 111.png'

export const Home = () => {
    return (
        <div className="w-full 2xl:w-[1920px] relative overflow-hidden">
            <div className="w-full">
                <ClientNav />
            </div>
            {/* Section 1 */}
            <section className="w-full h-[600px] bg-gray-400">

            </section>
            <div className="w-full h-auto lg:h-[130px] bg-gray-500 px-[10px] lg:px-[20px]">
                <div className="w-full h-full flex lg:flex-row justify-between px-[20px] lg:justify-center items-start gap-x-[10px] lg:gap-x-[90px]">
                    <div className="w-auto">
                        <h1 className="font-Lexend text-[25px] lg:text-[50px] text-center">15K+</h1>
                        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-center font-Lexend">Students</p>
                    </div>
                    <div className="w-auto">
                        <h1 className="font-Lexend text-[25px] lg:text-[50px] text-center">75%</h1>
                        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-center font-Lexend">Total success</p>
                    </div>
                    <div className="w-auto">
                        <h1 className="font-Lexend text-[25px] lg:text-[50px] text-center">35</h1>
                        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-center font-Lexend">Main questions</p>
                    </div>
                    <div className="w-auto">
                        <h1 className="font-Lexend text-[25px] lg:text-[50px] text-center">26</h1>
                        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-center font-Lexend">Chief experts</p>
                    </div>
                    <div className="w-auto">
                        <h1 className="font-Lexend text-[25px] lg:text-[50px] text-center">16</h1>
                        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-center font-Lexend">Years of experience</p>
                    </div>
                </div>
            </div>
            {/* Section 2 */}
            <section className="mt-[40px] w-full h-auto p-[20px_20px]">
                <div className="md:w-[800px] w-full m-auto mb-[90px]">
                    <div className="font-bold mb-[20px]">
                        <h1 className="text-center font-Poppins text-[30px] text-[#2F327D]">All-In-One <span className="text-center font-Poppins text-[30px] text-[#00CBB8]">Learning Space & Virtual Campus</span></h1>
                    </div>
                    <div className="">
                        <p className="text-center font-Poppins text-[#696984] ">TAKUMI is Virtual Campus where students can learn everything they want based on their interest, professional and available time offering both online classes and Face-to-Face Zoom Classes.</p>
                    </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center flex-col lg:flex-row gap-y-[100px] lg:gap-y-0 gap-x-[50px] relative mb-[40px]">
                    <div className="w-[300px] p-[20px] rounded-[10px] bg-white shadow-[1px_1px_8px_#c3c3c381] h-[320px] relative flex justify-center items-center cursor-pointer hover:bg-[#222222] transition-all duration-150 group">
                        <div className="w-[190px] mt-[50px]">
                            <h1 className="text-center mb-4 font-Poppins text-[17px] group-hover:text-white transition-all duration-150 font-semibold text-[#2F327D]">Wide Variety of Classes to choose</h1>
                            <p className="text-center group-hover:text-gray-400 transition-all duration-150 ">Over 20+ course related to Engineering softwares and Languages.</p>
                        </div>
                        <div className="w-[75px] h-[75px] absolute transformXCenter top-[-35px] rounded-[50%] bg-[#5B72EE] flex justify-center items-center group-hover:bg-black transition-all duration-150">
                            <FaClipboardList className="text-white text-[30px]" />
                        </div>
                    </div>
                    <div className="w-[300px] p-[20px] rounded-[10px] bg-white shadow-[1px_1px_8px_#c3c3c381] h-[320px] relative flex justify-center items-center cursor-pointer hover:bg-[#222222] transition-all duration-150 group">
                        <div className="w-[230px] mt-[50px]">
                            <h1 className="text-center mb-4 font-Poppins text-[17px] group-hover:text-white transition-all duration-150 font-semibold text-[#2F327D]">Can choose based on your schedules</h1>
                            <p className="text-center group-hover:text-gray-400 transition-all duration-150 ">Offers classes on Weekdays or Weekends allowing students to learn new skills without impacting daily life schedules.</p>
                        </div>
                        <div className="w-[75px] h-[75px] absolute transformXCenter top-[-35px] rounded-[50%] bg-[#00CBB8] flex justify-center items-center group-hover:bg-black transition-all duration-150">
                            <MdOutlineDateRange className="text-white text-[30px]" />
                        </div>
                    </div>
                    <div className="w-[300px] p-[20px] rounded-[10px] bg-white shadow-[1px_1px_8px_#c3c3c381] h-[320px] relative flex justify-center items-center cursor-pointer hover:bg-[#222222] transition-all duration-150 group">
                        <div className="w-[230px] mt-[50px]">
                            <h1 className="text-center mb-4 font-Poppins text-[17px] group-hover:text-white transition-all duration-150 font-semibold text-[#2F327D]">Create Community</h1>
                            <p className="text-center group-hover:text-gray-400 transition-all duration-150 ">Allowing students to discuss with each other not only encourage brainstorming but also create Community.</p>
                        </div>
                        <div className="w-[75px] h-[75px] absolute transformXCenter top-[-35px] rounded-[50%] bg-[#29B9E7] flex justify-center items-center group-hover:bg-black transition-all duration-150">
                            <MdGroups className="text-white text-[30px]" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 */}
            <section className="w-full rounded-[40px] overflow-hidden bg-gray-800 h-[700px] mt-[30px] mb-[30px]">
                <img src={learningPageImg} alt="" className="w-full h-full object-cover" />
            </section>
            {/* Section 4 */}
            <section className="w-full h-auto py-[40px] px-[20px] flex justify-center items-center mb-[40px]">
                <div className="flex justify-center flex-col gap-y-[40px] items-center">
                    <div className="w-full lg:w-[800px]">
                        <h1 className="text-center font-Poppins text-[33px] font-semibold text-[#2F327D]">What is K-Hub?</h1>
                        <p className="text-center mt-[20px] font-Poppins">TAKUMI is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    </div>
                    <div className="w-full justify-evenly flex lg:flex-row flex-col gap-x-[60px]">
                        <div className="w-full h-auto flex lg:flex-row flex-col items-center relative cursor-pointer mt-[50px]">
                            <div className="w-[370px] h-[300px] lg:w-[500px] lg:h-[350px] overflow-hidden cursor-pointer rounded-2xl brightness-75">
                                <img src={forInstructors} alt="" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200" />
                            </div>
                            <div className="absolute flex justify-center items-center bg-transparent w-[370px] h-[300px] lg:w-[500px] lg:h-[350px]">
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <h1 className="font-Poppins text-[20px] text-white font-semibold uppercase">For Instructors</h1>
                                    <div className="w-[200px] flex justify-center items-center mt-[20px] border-white rounded-[40px] h-[50px] border hover:bg-[#23BDEE]/60 transition-all duration-150">
                                        <h1 className="font-Poppins text-white ">Start a class today</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto flex lg:flex-row flex-col items-center relative cursor-pointer mt-[50px]">
                            <div className="w-[370px] h-[300px] lg:w-[500px] lg:h-[350px] overflow-hidden cursor-pointer rounded-2xl brightness-75">
                                <img src={forStudent} alt="" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-200" />
                            </div>
                            <div className="absolute flex justify-center items-center bg-transparent w-[370px] h-[300px] lg:w-[500px] lg:h-[350px]">
                                <div className="w-full h-full flex flex-col justify-center items-center">
                                    <h1 className="font-Poppins text-[20px] text-white font-semibold uppercase">For Students</h1>
                                    <div className="w-[200px] flex justify-center items-center mt-[20px] border-white rounded-[40px] h-[50px] border hover:bg-[#23BDEE]/60 transition-all duration-150">
                                        <h1 className="font-Poppins text-white ">Explore Courses Now!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 5 */}
            <section className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[60px] lg:gap-y-0">
                <div className="w-full lg:w-[50%]">
                    <div className="mb-[30px]">
                        <h1 className="font-Poppins text-center lg:text-start text-[#2F327D] lg:text-[36px] font-semibold text-[29px]">Everything you can do in a physical classroom,<span className="text-[#00CBB8] ">you can do with K-Hub</span></h1>
                    </div>
                    <div className="mb-[30px]">
                        <p className="font-Poppins text-[18px] lg:text-[20px] text-center lg:text-start text-[#696984] leading-[33px]">K-Hub’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    </div>
                    <div>
                        <p className="cursor-pointer text-center lg:text-start">Learn more</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] h-full flex items-center relative cursor-pointer group">
                    <div className="w-full h-[460px] rounded-2xl overflow-hidden">
                        <img src={section4img} alt="" className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-150" />
                    </div>
                    <div className="absolute transformCenter cursor-pointer w-[70px] h-[70px] flex justify-center items-center">
                        <FaCirclePlay className="text-[50px] text-center group-hover:text-red-500 transition-all duration-150" />
                    </div>
                </div>
            </section>
            {/* Section 6 */}
            <section className="mt-[80px] w-full h-auto">
                <div className="m-auto w-full lg:w-[550px] mb-[40px] lg:mb-[80px]">
                    <h1 className="text-center mb-[20px] font-Poppins text-[#2F327D] font-semibold lg:text-[36px] text-[29px]">Our <span className="text-[#00CBB8]">Features</span></h1>
                    <p className="text-center font-Poppins text-[#696984]">This very extraordinary feature,can make learning activites more efficient</p>
                </div>
                <div className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[60px] lg:gap-y-0">
                    <div className="w-full lg:w-[50%] lg:h-full h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
                        <img src={onlineZoom} alt="" className="w-full h-full object-cover  group-hover:scale-[1.1] transition-all duration-150" />
                    </div>
                    <div className="w-full lg:w-[40%] h-auto">
                        <h1 className="text-[#2F327D] mb-[20px] font-semibold font-Poppins text-[29px] lg:text-[30px]">A <span className="text-[#00CBB8]">Casual Zoom Meeting</span> With Students</h1>
                        <div className="flex flex-col gap-y-[20px] w-full">
                            <div className="mt-[25px] flex gap-x-[20px] items-center group cursor-pointer">
                                <div className="w-[40px] h-[40px] rounded-[50%] cursor-pointer group-hover:bg-gray-400 transition-all duration-150 flex justify-center items-center shadow-[1px_0px_10px_gray]">
                                    <img src={DashIcon} alt="" className="w-[22px] h-[22px]" />
                                </div>
                                <p className="font-Poppins text-[#696984]">Casual Zoom meetings with Students</p>
                            </div>
                            <div className="mt-[25px] flex gap-x-[20px] items-center group cursor-pointer">
                                <div className="w-[40px] h-[40px] rounded-[50%] cursor-pointer group-hover:bg-gray-400 transition-all duration-150 flex justify-center items-center shadow-[1px_0px_10px_gray]">
                                    <img src={advice} alt="" className="w-[22px] h-[22px]" />
                                </div>
                                <p className="font-Poppins text-[#696984]">Can Discuss and Ask for Advice</p>
                            </div>
                            <div className="mt-[25px] flex gap-x-[20px]  items-center group cursor-pointer ">
                                <p className="font-Poppins text-[#696984]">Teachers can easily see all students and class data at one time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 7 */}
            <section className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[90px] lg:gap-y-0 mt-[90px] mb-[90px]">
                <div className="w-full lg:w-[45%]">
                    <div className="mb-[30px]">
                        <h1 className="font-Poppins text-center lg:text-start text-[#00CBB8] lg:text-[36px] font-semibold text-[29px]">Tools <span className="text-[#2F327D] ">For Teachers And Learners</span></h1>
                    </div>
                    <div className="mb-[30px]">
                        <p className="font-Poppins text-[18px] lg:text-[20px] text-center lg:text-start text-[#696984] leading-[33px]">Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] lg:h-full h-[440px] flex items-center relative cursor-pointer ">
                    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                        <img src={group122} alt="" className="w-full h-full object-cover lg:object-fill" />
                    </div>
                </div>
            </section>
            {/* Section 8 */}
            <section className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[90px] lg:gap-y-0 mt-[90px] mb-[90px]">
                <div className="w-full lg:w-[50%] lg:h-full h-[440px] flex items-center relative cursor-pointer ">
                    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                        <img src={group92} alt="" className="w-full h-full object-cover lg:object-fill" />
                    </div>
                </div>
                <div className="w-full lg:w-[45%]">
                    <div className="mb-[30px]">
                        <h1 className="font-Poppins lg:text-start text-[#2F327D] lg:text-[36px] font-semibold text-[29px]">Assessments,  <span className="text-[#00CBB8] ">Quizzes</span>, Tests</h1>
                    </div>
                    <div className="mb-[30px]">
                        <p className="font-Poppins text-[18px] lg:text-[20px] text-center lg:text-start text-[#696984] leading-[33px]">Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.</p>
                    </div>
                </div>
            </section>
            {/* Section 9 */}
            <section className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[70px] lg:gap-y-0 mt-[90px] mb-[90px]">
                <div className="w-full lg:w-[45%]">
                    <div className="mb-[30px]">
                        <h1 className="font-Poppins text-center lg:text-start text-[#00CBB8] lg:text-[36px] font-semibold text-[29px]">Class Management <span className="text-[#2F327D] inline-block">Tools for Educators</span></h1>
                    </div>
                    <div className="mb-[30px]">
                        <p className="font-Poppins text-[18px] lg:text-[20px] text-center lg:text-start text-[#696984] leading-[33px]">Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.</p>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] lg:h-full h-[370px] flex items-center relative cursor-pointer">
                    <div className="w-full h-[500px] overflow-hidden  rounded-2xl lg:rounded-[0px]">
                        <img src={group124} alt="" className="w-full h-full object-cover lg:object-fill" />
                    </div>
                </div>
            </section>
            {/* section 10 */}
            <section className="w-full h-auto lg:h-[480px] px-[30px] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-x-[50px] gap-y-[90px] lg:gap-y-0 mt-[90px] mb-[90px]">
                <div className="w-full lg:w-[50%] lg:h-full h-[440px] flex items-center relative cursor-pointer ">
                    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                        <img src={group106} alt="" className="w-full h-full object-cover lg:object-fill" />
                    </div>
                </div>
                <div className="w-full lg:w-[45%]">
                    <div className="mb-[30px]">
                        <h1 className="font-Poppins text-center lg:text-start text-[#2F327D] lg:text-[36px] font-semibold text-[29px]">One-on-One <span className="text-[#00CBB8] ">Discussions</span>, Tests</h1>
                    </div>
                    <div className="mb-[30px]">
                        <p className="font-Poppins text-[18px] lg:text-[20px] text-center lg:text-start text-[#696984] leading-[33px]">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                    </div>
                </div>
            </section>
            <div className="w-full h-auto flex justify-center mb-[70px]">
                <div className="w-[300px] h-[80px] flex justify-center items-center rounded-[40px] border-[0.2px] border-[#49BBBD] cursor-pointer hover:bg-[#49BBBD] transition-all duration-150 group">
                    <h1 className="text-[#49BBBD] font-Poppins font-medium text-[20px] group-hover:text-white transition-all duration-150">See more features</h1>
                </div>
            </div>
            {/* Section 11 */}
            <section className="w-full rounded-2xl h-[700px] bg-gray-500">

            </section>
            {/* Footer */}
            <footer className="w-full h-[500px] bg-[#252641] relative">
                <div className="w-full h-[50%] flex justify-center items-center gap-x-[30px]">
                    <div className="w-[80px] h-[80px]">
                        <img src={group111} alt="" className="w-full h-full "/>
                    </div>
                    <hr className="w-[1px] h-[80px] bg-gray-400"/>
                    <div className="w-[80px]">
                        <h1 className="font-Poppins text-white font-semibold">Virtual Class for Zoom</h1>
                    </div>
                </div>
                <div className="w-full flex h-[30%] flex-col md:flex-row items-center justify-center gap-y-[20px] md:gap-y-0 gap-x-[50px] font-Poppins">
                    <h1 className="text-[#B2B3CF]">Careers</h1>
                    <hr className="w-[1px] hidden md:block h-[20px] bg-[#B2B3CF]"/>
                    <h1 className="text-[#B2B3CF]">Privacy Policy</h1>
                    <hr className="w-[1px] hidden md:block h-[20px] bg-[#B2B3CF]"/>
                    <h1 className="text-[#B2B3CF]">Terms & Conditions</h1>
                </div>
                <div className="m-auto flex justify-center items-center absolute bottom-[10px] transformXCenter">
                    <h1 className="text-[#B2B3CF] font-Poppins text-[17px]">@2025 K-Hub</h1>
                </div>
            </footer>
        </div>
    )
}