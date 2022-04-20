import { useState } from "react";
import { postBooking } from "./BookingService";


const BookingsForm = ({addBooking}) => {

    const[formData, setFormData] = useState({})

    // const [isChecked, setIsChecked] = useState();

    const onChange = (e) => {
        if (formData [e.target.id] === "checkedIn") {
            formData["checkedIn"] = true
        } else {
            formData["checkedIn"] = false
        }
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        const form = e.target 
        form.reset()
    }

    return (

        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" required />
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="email" required />
            </div>
            <div className="formWrap">
                <label htmlFor="checkedIn">Checked In?</label>
                <input onChange={onChange} type="checkbox" id="checkedIn" />
            </div>

            <input type="submit" value="save" id="save" />

        </form>

    )

}

export default BookingsForm