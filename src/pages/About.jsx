/* eslint-disable react/no-unescaped-entities */
import { FaAnglesRight } from "react-icons/fa6";
import aboutProfile from "../assets/img/about.jpg"

const About = () => {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="w-[75%] mx-auto text-gray-500 py-24">
                <div className="flex justify-center flex-col xl:flex-row items-center gap-8">
                    <div className="w-[100%] md:w-[70%] xl:w-[40%] text-center xl:text-start">
                        <h2 className="text-5xl font-extrabold">Across Industries !</h2>
                        <h3 className="text-[25px] font-semibold py-6">JNavigating Future of Digital Excellence !</h3>
                        <p className="text-[18px] text-justify">At Task Management, we believe in the transformative power of technology and innovation. Our platform is meticulously designed to cater to the distinct needs of doctors, developers, corporate professionals, and bankers, offering tailored solutions that drive efficiency, collaboration, and success.</p>
                        <button className="mx-auto bg-black border-2 border-yellow-600 py-4 px-8 text-white font-semibold text-xl font-serif my-8">Know More<FaAnglesRight className="inline ml-1"></FaAnglesRight></button>
                    </div>
                    <div className="w-[100%] md:w-[80%] xl:w-[40%] xl:ml-8">
                        <img className="mx-auto  w-[100%] rounded-2xl" src={aboutProfile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;