import bannerimg from "./../../assets/istockphoto-2153871515-612x612.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-[80%] flex-col lg:flex-row-reverse">
                <img
                    src={bannerimg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">"Your Smile, Our Mission!"</h1>
                    <p className="py-6">
                        Dentes is a modern dental clinic where you will find high-quality dental treatment, experienced doctors, and premium services. Our goal is to keep your smile beautiful and healthy.

                    </p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
