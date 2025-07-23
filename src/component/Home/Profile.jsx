import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { NavLink } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (

        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                    <p className="py-6">
                        <p>Email: {user?.email}</p>
                    </p>
                    <NavLink to="/"> <button className="btn btn-primary">Back to Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Profile;