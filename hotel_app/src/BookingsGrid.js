import Booking from './Booking';

const BookingsGrid = ({bookings, removeBooking, toggleBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking} toggleBooking={toggleBooking}/>
    })
    return (
        <>
            {bookingsList}
        </>
    )
}

export default BookingsGrid;