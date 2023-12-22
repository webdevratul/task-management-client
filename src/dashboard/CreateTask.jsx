/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import taskBanner from "../assets/img/service_banner.jpg";


const CreateTask = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {

    }
    return (
        <div className="bg-[#E7E7E7] py-24 flex flex-col xl:flex-row justify-center items-center gap-x-32 w-[100%] md:w-[82%]">
            <div className="w-[90%] xl:w-[30%] mb-0" data-aos="fade-down-right">
                <div className="w-[90%] h-[50vh] bg-yellow-500 rounded-2xl relative mt-20">
                    <img className="w-[100%] h-[50vh] rounded-2xl absolute top-[-10%] left-[8%] object-cover" src={taskBanner} alt="" />
                </div>
            </div>
            <div className="w-[100%] xl:w-[40%] p-6 text-gray-600">
                <h2 className="text-3xl 2xl:text-5xl font-extrabold">Create Task 🥰</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-xl text-gray-600">Description*</span>
                            </label>
                            <textarea
                                placeholder="Enter Description"
                                className="input input-bordered w-full h-24 pt-2"
                                {...register("message", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text text-xl text-gray-600">Priority*</span>
                            </label>
                            <select defaultValue="Default" {...register("bloodGrp", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="Default">Select Group</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-xl text-gray-600">Deadlines*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Deadlines"
                                className="input input-bordered w-full"
                                {...register("deadlines", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg font-semibold bg-yellow-500 text-2xl font-serif text-white my-8">
                        Submit Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;

