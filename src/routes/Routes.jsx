// import createBrowserRouter
import {
    createBrowserRouter,
} from "react-router-dom";

// import others pages
import Root from "../layouts/Root";
import Home from "../pages/Home";
import UserType from "../pages/UserType";
import About from "../pages/About";
import Error from "../components/layouts/Error";
import Regsiter from "../pages/Register";
import Login from "../pages/Login";
import RootDashboard from "../rootDashboard/RootDashboard";
import PrivateRoutes from "./PrivateRoutes";
import TaskManagement from "../dashboard/TaskManagement";
import CreateTask from "../dashboard/CreateTask";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/userType",
                element: <UserType></UserType>
            },
            {
                path: "/register",
                element: <Regsiter></Regsiter>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><RootDashboard></RootDashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoutes><TaskManagement></TaskManagement></PrivateRoutes>
            },
            {
                path: "/dashboard/createTask",
                element: <PrivateRoutes><CreateTask></CreateTask></PrivateRoutes>
            }
        ]
    }

])