import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { handelGoogleLogin, userLogin, setUser, user } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handelSingIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            });

        form.reset();
    };

    const googleLogin = () => {
        handelGoogleLogin()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="bg-base-200">
            <div className="text-center">
                <div><p>{user?.email}</p></div>
                <h1 className="text-5xl font-bold">Login now!</h1>

                <button onClick={googleLogin} className="btn bg-white my-3">
                    <FaGoogle className="text-blue-700" /> Google Login
                </button>
            </div>

            <div className="hero bg-base-200">
                <div className="hero-content flex-col w-[70%]">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handelSingIn} className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" required />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" required />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-blue-600 btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <div>
                            <p className="text-center mb-3 font-bold">
                                New to the Website? Please <NavLink to="/register"><span className="text-blue-700 underline italic">register</span></NavLink>
                            </p>
                            {error && <p className="text-red-500 text-center">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
