import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../provider/Provider";


// login page
const Login = () => {

    const { signIn, googleSignIn } = useContext(Context);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    // login use email password
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
        signIn(email, password)
            .then((result) => {
                // Signed in 
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You are successfully Logged in !",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    e.target.reset();
                    // navigate after login 
                    navigate("/");
                }
            })
            .catch((error) => {
                setLoginError(error.message);
                e.target.reset();
            });
    }
    // login with google 
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                if (result.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "You are successfully Logged in !",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    // navigate after login 
                    navigate("/");
                }
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <>
            <div className="hero bg-base-200 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                        {/* login form */}
                        <form onSubmit={handleLogin} className="card-body">
                            {
                                loginError && <div className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Invalid-login-credentials!</span>
                                </div>
                            }

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white text-xl mb-2">Login</button>
                                <button onClick={handleGoogleLogin} className="btn btn-primary text-xl mb-2 bg-[#4285F4] border-none">Login With Google</button>
                            </div>
                            <p>If you are new in this website please <Link to="/register" className="underline text-blue-600 text-xl">Register</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;



