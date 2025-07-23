import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../MainLayout";
import About from "../Home/About";
import MyAppoinments from "../Home/MyAppoinments";
import Profile from "../Home/Profile";
import AllTreatments from "../Home/AllTreatments";
import AllDeatilsCard from "../Home/AllDeatilsCard";
import Login from "../Home/Login";
import Register from "../Home/Register";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch("/service.json");
                    const services = await servicesRes.json();

                    const fedbackRes = await fetch("review.json")
                    const feedBackData = await fedbackRes.json();

                    return { feedBackData, services }
                }

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/myappointment',
                element: <PrivateRoute> <MyAppoinments></MyAppoinments></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile></PrivateRoute>
            },
            {
                path: '/alltreatment',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch("/public/service.json")
            },
            {
                path: '/alldetails/:id',
                element: <PrivateRoute><AllDeatilsCard></AllDeatilsCard></PrivateRoute>,
                loader: async ({ params }) => {

                    const res = await fetch('/public/service.json');
                    const data = await res.json()
                    const singelData = data.find(d => d.id == params.id)
                    return singelData;
                }
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]
    }
])

export default router