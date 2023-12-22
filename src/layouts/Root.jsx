// import outlet
import { Outlet } from "react-router-dom";

// import others file
import Header from "./Header";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="font-serif">
            {/* use header footer in root file */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;