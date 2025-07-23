import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

const MyAppoinments = () => {
    const { user } = useContext(AuthContext);
    const [localApointData, setLaocalAppointData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("appointment");
        let saveData = [];
        if (localData) {
            saveData = JSON.parse(localData);
        }
        const userData = saveData.filter(data => data.email === user?.email);
        setLaocalAppointData(userData);
    }, [user?.email]);

    return (
        <div className="bg-base-200 min-h-screen mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-6">My Appointments</h1>

            {
                localApointData.length === 0 ? (
                    <p className="text-center text-gray-600">No appointments found.</p>
                ) : (
                    <div className="grid">
                        {localApointData.map((data, index) => (
                            <div key={index} className="card bg-white shadow-xl mx-auto mb-3 p-6">
                                <h2 className="text-xl font-semibold text-blue-600">{data.fname} {data.lname}</h2>
                                <p><span className="font-semibold">Email:</span> {data.email}</p>
                                <p><span className="font-semibold">Phone:</span> {data.phone}</p>
                                <p><span className="font-semibold">Date:</span> {data.date}</p>
                                <p><span className="font-semibold">Treatment:</span> {data?.title}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default MyAppoinments;
