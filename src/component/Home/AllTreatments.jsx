import { useLoaderData } from "react-router-dom";
import ServicesAllCard from "./ServicesAllCard";

const AllTreatments = () => {

    const services = useLoaderData()

    return (
        <div>
            <div className="text-center mt-9">
                <h1 className="text-3xl font-extrabold">"Your Smile, Our Priority"</h1>
                <p className="text-gray-500 my-3">"Experience the art of modern dentistry with a gentle touch — because every smile deserves expert care."
                </p>
            </div>
            <div className="grid  mx-auto gap-2 md:grid-cols-3 lg:grid-cols-4 w-[96%]">

                {
                    services.map(service => <ServicesAllCard key={service.id} service={service}></ServicesAllCard>)
                }
            </div>
        </div>
    )
};

export default AllTreatments;