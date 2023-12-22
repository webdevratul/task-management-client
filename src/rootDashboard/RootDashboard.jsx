import { Outlet } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";


const RootDashboard = () => {
    return (
        <div className="font-serif flex flex-col md:flex-row">
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default RootDashboard;