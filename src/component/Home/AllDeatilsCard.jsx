import { NavLink, useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const AllDeatilsCard = () => {
    const { cost, description_en, image, title } = useLoaderData();

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">{title}</h1>
                    <p className="mb-5 text-gray-200">
                        {description_en}
                    </p>
                    <p className="mb-3"> Total Cost onley : {cost}</p>
                    <div className=" space-x-2">
                        <NavLink to="/"><button className="btn btn-primary">Back to Home page</button></NavLink>

                        <button className="btn btn-primary bg-[#ff9900]" onClick={() => document.getElementById('my_modal_4').showModal()}>Book Appoinment</button>
                    </div>
                </div>
            </div>
            <Modal title={title}></Modal>
        </div>
    );
};

export default AllDeatilsCard;