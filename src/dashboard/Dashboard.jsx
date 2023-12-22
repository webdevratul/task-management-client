import { Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { IoAlbumsSharp } from "react-icons/io5";
import { useContext } from "react";
import { Context } from "../provider/Provider";
import { TbDetails } from "react-icons/tb";
import { MdUnsubscribe } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";


const Dashboard = () => {

    const { user } = useContext(Context);

    return (
        <div className="left-side w-[100%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[18%] h-[100vh] bg-[#242529] text-white border-r-8 border-black pt-20 pb-[203px] border-b-8">
            <img className="w-[90px] h-[90px] ml-8 rounded-full border-4 border-[#E8E8EA] mb-4 object-cover" src={user ? user?.photoURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"} alt="" />
            <div className="pt-6 flex flex-col gap-y-8 text-[25px]">
                <>
                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/">
                            <FaHome></FaHome>
                            <span className="hover:text-yellow-400 transition">Home</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/about">
                            <TbDetails></TbDetails>
                            <span className="hover:text-yellow-400 transition">About</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/">
                            <FaBloggerB></FaBloggerB>
                            <span className="hover:text-yellow-400 transition">User Type</span>
                        </Link>
                    </div>
                    <div className="">
                        <Link className="flex items-center gap-3 pl-8" to="/featured">
                            <IoAlbumsSharp></IoAlbumsSharp>
                            <span className="hover:text-yellow-400 transition">Packages</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/contact">
                            <MdUnsubscribe></MdUnsubscribe>
                            <span className="hover:text-yellow-400 transition">Subscribe</span>
                        </Link>
                    </div>
                    <div className="w-[90%] h-[0.10px] rounded-2xl mx-auto bg-gray-400 hidden lg:block"></div>

                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/dashboard">
                            <IoHome></IoHome>
                            <span className="hover:text-yellow-400 transition">Dashboard</span>
                        </Link>
                    </div>

                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/dashboard/profile">
                            <FaUser></FaUser>
                            <span className="hover:text-yellow-400 transition">Profile</span>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex items-center gap-3 pl-8" to="/dashboard/profile">
                            <FaSignOutAlt></FaSignOutAlt>
                            <span className="hover:text-yellow-400 transition">Explore More</span>
                        </Link>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Dashboard;