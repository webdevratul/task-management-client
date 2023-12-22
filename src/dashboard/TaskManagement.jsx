import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const TaskManagement = () => {
    return (
        <div>
            <Link to="/dashboard/createTask">
                <button className="px-6 py-2 bg-black border-2 border-yellow-500 text-white text-[22px] font-bold flex items-center ml-4 mt-8">Create New Task <IoIosCreate className="ml-4 text-2xl"></IoIosCreate> </button>
            </Link>
        </div>
    );
};

export default TaskManagement;