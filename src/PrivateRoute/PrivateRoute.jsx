import { useContext } from "react";
import { AuthContext } from "../component/Home/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    console.log(user);
    if (loading) {
        return <>Loading <span className="loading loading-spinner loading-xl"></span></>
    }
    if (!user) {
        return <Navigate state={{ from: location }} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;