import {useState, useEffect} from 'react';
import './App.css';

import BookingsGrid from "./BookingsGrid";
import {getBookings} from "./BookingService";
import BookingsForm from './BookingsForm';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    const temp = bookings.map(booking => booking);
    temp.push(booking);
    setBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = bookings.map(booking => booking);
    const indexToDel = temp.map(booking => booking._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setBookings(temp);
  }

  const toggleBooking = (id, updatedData) => {
    const temp = bookings.map(booking => booking);
    const indexToUpdate = temp.map(booking => booking._id).indexOf(id);

    temp[indexToUpdate] = updatedData
    setBookings(temp);
  }

  return (
    <>
    <h1>Hotel Bookings of 00s Sports Persons</h1>
    <BookingsForm addBooking={addBooking} />
    <BookingsGrid bookings={bookings} removeBooking={removeBooking} toggleBooking={toggleBooking}/>

    </>
    
  );
}

export default App;
