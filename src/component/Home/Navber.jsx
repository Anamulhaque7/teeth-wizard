import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const Navber = () => {
    const { user, userLogout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelLogout = () => {
        userLogout()
            .then(
                navigate('/')
            ).catch(error => {
                console.log("Logout Erroe", error.message);
            })
    }

    return (
        <div className="bg-[#000066] items-center p-3  min-h-20 text-white flex justify-between">
            <div>
                <h1 className="text-xl font-extrabold ">TEETH WIZARD</h1>
                <p>{user?.email}</p>
            </div>
            <div className=" grid gap-2 text-center text-sm sm:grid-cols-4 font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/alltreatment">All Treatments</NavLink>
                <NavLink to="/myappointment">My Appoinments</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                {
                    user ? (
                        <button onClick={handelLogout} className="btn btn-error">Logout</button>
                    ) : (
                        <NavLink to="/login">
                            <button className="btn btn-primary">Login</button>
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Navber;