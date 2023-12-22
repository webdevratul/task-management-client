// import link 
import { Link } from "react-router-dom";

// import others files
import banner from "../../assets/img/banner.jpg";
import { MdArrowRight } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const Banner = () => {
    return (
        // banner section
        <div className="w-[100%] h-[100vh] xl:h-[85vh] text-white">
            <div className="relative">
                <img className="w-[100%] h-[100vh] xl:h-[85vh] object-cover" src={banner} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                <div className="absolute top-14 md:top-28 2xl:top-32 left-[14%] w-[80%] xl:w-[60%] 2xl:w-[50%] text-xl">
                    {/* banner text section */}
                    <div>
                        <h1 className="text-3xl lg:text-5xl -ml-3 xl:ml-1 font-extrabold">Organized and Efficient !</h1>
                        <h2 className="text-4xl lg:text-6xl -ml-3 xl:ml-1 font-extrabold pt-4 lg:pt-8 text-yellow-400">Intuitive Task Management for Modern Teams !</h2>
                        <div className="py-4 flex flex-col gap-y-1">
                            <div className="flex items-center -ml-8 xl:-ml-4">
                                <MdArrowRight className="text-5xl text-yellow-400" />
                                <p className="text-[22px]">Simplify your workday: tasks made intuitive and actionable !</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-4">
                                <MdArrowRight className="text-5xl text-yellow-400" />
                                <p className="text-[22px]">Harness the power of organized tasks for unparalleled productivity !</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-4">
                                <MdArrowRight className="text-5xl text-yellow-400" />
                                <p className="text-[22px]">Elevate team efficiency with our task-centric approach !</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-4">
                                <MdArrowRight className="text-5xl text-yellow-400" />
                                <p className="text-[22px]">Navigate tasks seamlessly with our user-friendly platform !</p>
                            </div>
                        </div>
                    </div>
                    {/* banner button */}
                    <div className="py-2 -ml-8 md:-ml-0 flex flex-col md:flex-row gap-4">
                        <Link to="/login">
                            <button className="bg-black  border-2 border-yellow-600  w-full md:w-auto md:px-8 py-3 text-2xl text-white font-serif flex flex-row items-center justify-center">
                                Let’s Explore <FaArrowRightFromBracket className="ml-4 text-2xl" />
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="bg-black  border-2 border-yellow-600  w-full md:w-auto md:px-8 py-3 text-2xl text-white font-serif flex flex-row items-center justify-center">
                                Create Account <CgProfile className="ml-4 text-2xl" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;