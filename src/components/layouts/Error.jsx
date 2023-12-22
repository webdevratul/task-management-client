import { Link } from "react-router-dom";

// error page 
const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen font-serif">
            <div className="text-center">
                <h2 className="text-6xl text-red-600 font-extrabold">Oops</h2>
                <h3 className="text-2xl mt-5">Sorry ! an unexpected error has Occurred</h3>
                <button className="px-6 text-[17px] py-2 border-2 border-yellow-600 rounded-full bg-black text-white mt-5"> <Link to="/">Go To Home</Link> </button>
            </div>
        </div>

    );
};

export default Error;