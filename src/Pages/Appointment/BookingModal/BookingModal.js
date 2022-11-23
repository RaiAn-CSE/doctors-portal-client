import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
    const { name, slots, price } = treatment;
    // console.log(name);
    const date = format(selected, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: userName,
            slot,
            email,
            phone,
            price,
        }


        // Send Booking Data In Database : 
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value="Submit" className="btn btn-accent" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;