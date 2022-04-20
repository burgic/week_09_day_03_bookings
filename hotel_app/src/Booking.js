import { useState } from "react";
import { deleteBooking } from "./BookingService";
import { updateBooking } from "./BookingService";

const Booking = ({booking, removeBooking, toggleBooking}) => {

    const [updateBooking, setUpdateBooking] = useState ({
        name: booking.name,
        email: booking.email,
        checkedIn: booking.checkedIn
    })

    // console.log(booking)
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }

    const handleCheckIn = (e) => {
        if (e.target.value === true) {
            updateBooking["checkedIn"] = false
        } else {
            updateBooking["checkedIn"] = true
        }
        updateBooking(booking._id, booking).then(() => {
            toggleBooking(booking._id, booking);
        })
    }

    return (
        <>
        <h3>{booking.name}</h3>
        <p>{booking.email}</p>
        {booking.checkedIn === true ? <p>Checked In </p> : <p>Not Checked In</p> } <button onClick={handleCheckIn} value={booking.checkedIn}>Check In / Out</button>
        <button onClick={handleDelete}> 🗑 </button>
        <hr></hr>
        </>
    )

}

export default Booking;