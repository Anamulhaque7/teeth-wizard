import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Modal = ({ title }) => {
    const { user } = useContext(AuthContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const address = form.address.value;
        const info = { fname, lname, email: user.email, phone, date, address, title };


        // Save to localStorage
        let saveData = [];
        const localData = localStorage.getItem("appointment");
        if (localData) {
            saveData = JSON.parse(localData); 
        }
        saveData.push(info);
        localStorage.setItem("appointment", JSON.stringify(saveData)); 

        form.reset();
        document.getElementById('my_modal_4').close();
    };

    return (
        <div>
            {/* You can open the modal using document.getElementById('my_modal_4').showModal() */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box mt-5">
                    <form action="" onSubmit={handelSubmit} className="space-y-4  ">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" name="fname" placeholder="Enter Your Name" className="input input-info w-full" />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="lname">Last Name:</label>
                            <input type="text" name="lname" placeholder="Enter Your Last name" className="input input-info w-full" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-info w-full" value={user?.email} />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" name="phone" placeholder="Enter Your Phone Number" className="input input-info w-full" />
                        </div>

                        {/* Appointment Date */}
                        <div className="flex flex-col">
                            <label htmlFor="date">Appointment Date:</label>
                            <input type="date" name="date" className="input input-info w-full" />
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label htmlFor="address">Address:</label>
                            <input type="text" name="address" placeholder="Enter Your Address" className="input input-info w-full" />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button className="btn mb-2 btn-primary btn-block ">Maka Appointment</button>
                        </div>
                    </form>

                    {/* Close Button */}
                    <div className="">
                        <form method="dialog">
                            <button className="btn btn-block  text-white bg-pink-500">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
