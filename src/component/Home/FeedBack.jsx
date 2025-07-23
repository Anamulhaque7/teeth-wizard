

const FeedBack = ({ feedback }) => {


    return (
        <div className="card bg-gray-500 text-primary-content  ">
            <div className="card-body">
                <div className="flex gap-4 items-center">
                    <img className="h-12 w-12 rounded-full" src={feedback.userImg} alt="" />
                    <h2 className="card-title">{feedback.name}</h2>
                    <p className=""><span className="font-bold">Date</span> : {feedback.date}</p>
                </div>
                <p>{feedback.review}</p>
                <div className="card-actions justify-between">
                    <div>
                        <div className="rating">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="4  star"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm"><span className="font-bold">Location </span>: {feedback.location}</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default FeedBack;