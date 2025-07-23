import { NavLink } from "react-router-dom";

const Serveice = ({ service }) => {

    const { cost, description_en, image, title, id } = service;
    console.log(service);
    return (
        <div className="card  bg-base-100 shadow-lg  hover:shadow-lg transition">
            {/* Image */}
            <figure>
                <img src={image} alt="Service" className="w-full h-52 object-cover" />
            </figure>

            <div className="card-body flex flex-col justify-between">

                {/* Title */}
                <h2 className="card-title text-xl font-bold text-primary">{title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm" title={description_en}>
                    <span className="font-semibold text-gray-700">Description:</span> {description_en.slice(0, 60)}...
                </p>

                {/* Price and Button Row */}
                <div className="flex justify-between items-center mt-4">
                    {/* Price Badge */}
                    <div className="badge badge-secondary text-sm px-3 py-2">৳{cost}</div>

                    {/* Checkout Button */}
                    <NavLink to={`/alldetails/${id}`}><button className="badge badge-outline font-bold bg-primary text-white px-4 py-2 hover:bg-blue-700 transition">
                        Check More
                    </button></NavLink>
                </div>

            </div>
        </div>


    );
};

export default Serveice;