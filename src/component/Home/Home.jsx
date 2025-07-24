import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Serveice from "./Serveice";
import FeedBack from "./FeedBack";

const Home = () => {

    const servieces = useLoaderData()
    const { feedBackData, services } = servieces;
    return (
        <div>
            <Banner></Banner>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 ">"Smile Brighter with Our <br /> Treatments"</h1>
                <p className=" my-4  text-gray-500"> Every treatment is delivered by experienced professionals <br /> using advanced dental technology.</p>
            </div>
            <div className="grid  mx-auto gap-2   md:grid-cols-3 lg:grid-cols-4 w-[96%]">
                {
                    services.slice(0, 4).map(service => <Serveice key={service.id} service={service}></Serveice>)
                }

            </div>
            <div className=" flex justify-center my-5">

                <NavLink to="/alltreatment"><button className="btn btn-primary">Show More Treatment</button></NavLink>

            </div>
            <div className="grid mt-7  mx-auto gap-4 md:grid-cols-2 lg:grid-cols-3 w-[95%]">
                {
                    feedBackData.map((feed) => <FeedBack key={feed.id} feedback={feed}></FeedBack>)
                }
            </div>


        </div>
    );
};

export default Home;