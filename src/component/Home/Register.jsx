import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
    const { userSingUp, setUser, user, manageProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const conpassword = form.conpassword.value;

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (password !== conpassword) {
            alert("Passwords do not match!");
            return;
        }

        const userInfo = { name, email, password };
        console.log("🟢 Form Data:", userInfo);

        userSingUp(email, password)
            .then((res) => {
                manageProfile(name, image)
                    .then(() => {
                        setUser(res.user); // optional
                        console.log("✅ Profile Updated");
                    })
                    .catch((err) => console.log("Profile update error:", err.message));
            })
            .catch((error) => {
                console.log("Signup error:", error.message);
            });

        form.reset();
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p>{user?.displayName}</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" name="name" required />

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" required />

                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" required />

                            <label className="label">Confirm Password</label>
                            <input type="password" className="input" name="conpassword" required />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" name="image" required />

                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className="text-center mb-3 font-bold">
                        Already have an account?{" "}
                        <NavLink to="/login">
                            <span className="text-blue-700 underline italic">Login</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
