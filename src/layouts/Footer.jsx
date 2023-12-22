/* eslint-disable react/no-unescaped-entities */

// import image and others
import footer1 from "../assets/img/footer1.jpg";
import footer2 from "../assets/img/footer2.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

// footer page
const Footer = () => {
    return (
        <div className="w-[100%] bg-black py-16">
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
                <div>
                    <div className="bg-white p-2 w-[250px] border-2 border-yellow-500">
                        <b className="text-2xl">Task<span className="text-yellow-500 ml-2">Management</span> </b>
                    </div>
                    <p className="my-4 text-white text-xl">Dedicated to empowering professionals across diverse industries, our platform is crafted with precision, innovation, and a deep understanding of your unique needs !</p>
                    <div className="flex gap-x-4 justify-center md:justify-start mb-4">
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <AiOutlineMail className="mx-auto text-yellow-600"></AiOutlineMail>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaFacebook className="mx-auto text-yellow-600"></FaFacebook>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaInstagram className="mx-auto text-yellow-600"></FaInstagram>
                        </p>
                    </div>
                </div>
                <div className="md:ml-28 mx-auto md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link>Home</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link>About</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link>User Type</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link>Subscribe</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link>Footer</Link> </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:ml-8 md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Benefits Users</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Doctors</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Developers</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Corporate Professionals</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Bankers</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Others</Link></p>
                        </div>
                    </div>
                </div>
                <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Latest Post</h2>
                    <div>
                        <div className="flex item items-center mb-4">
                            <img className="w-[120px] h-[80px] object-cover" src={footer1} alt="" />
                            <h5 className="ml-2">Unlocking the Future of Digital Health for Doctors !</h5>
                        </div>
                        <div className="flex items-center">
                        <img className="w-[120px] h-[80px] object-cover" src={footer2} alt="" />
                            <h5 className="ml-2">Evolving Role of Developers in Modern Enterprises</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto h-1 bg-yellow-500 mt-10 rounded-xl border-2" />
            <h2 className="text-center mt-10 text-2xl font-bold text-white">All Rights Reserved by &copy; Task  <span className="text-yellow-600">Management</span> </h2>
        </div>
    );
};

export default Footer;