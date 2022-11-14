import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selected }) => {
    const [appointmentData, setAppointmentData] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentData(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>You picked {format(selected, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentData.map(option => <AppointmentCard
                        appointmentOption={option}
                        key={option._id}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selected={selected}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;