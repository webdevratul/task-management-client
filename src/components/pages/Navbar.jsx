import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../provider/Provider";

const Navbar = () => {
    const { user, logOut } = useContext(Context);

    // logout user
    const handleSignOut = () => {
        logOut()
            .then(() => {
            }).catch((error) => {
                console.log(error.message);
            });
    }

    // make navlink
    const navLink = <>
        <li className="mx-2 text-[18px]"><NavLink to="/">Home</NavLink></li>
        <li className="mx-2 text-[18px]"><NavLink to="/about">About</NavLink></li>
        <li className="mx-2 text-[18px]"><NavLink to="/userType">User Type</NavLink></li>
        <li className="mx-2 text-[18px]"><NavLink to="/packages">Packages</NavLink></li>
        <li className="mx-2 text-[18px]"><NavLink to="/subscribe">Subscribe</NavLink></li>
        {
            user && <li className="mx-2 text-[18px]"><NavLink to="/Dashboard">Dashboard</NavLink></li>
        }
    </>
    return (
        <div>
            {/* navbar */}
            <div className="navbar bg-white mx-auto shadow-lg 2xl:px-20 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-40">
                            {/* use navlink */}
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl  md:text-4xl text-[#2B3440]">Task<span className="text-yellow-500">Management</span> </a>
                </div>
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* use navlink */}
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end flex flex-col md:flex-row item-center">
                    {
                        user ?
                            <button onClick={handleSignOut} className="px-1  md:px-6 py-2 rounded-full bg-black text-[16px] text-white font-bold border-2 border-yellow-600 md:text-2xl ml-28 shadow-2xl">
                                Logout
                            </button>
                            :
                            <Link to="/login">
                                <button className="px-1  md:px-6 py-2 rounded-full bg-black text-[16px] text-white font-bold border-2 border-yellow-600 md:text-2xl ml-28 shadow-2xl">
                                    Login
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;