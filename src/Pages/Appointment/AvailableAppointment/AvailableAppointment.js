import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selected }) => {
    // const [appointmentData, setAppointmentData] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentoptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentData(data))
    // }, [])


    // React Query :
    // const { data: appointmentData = [] } = useQuery({
    //     queryKey: ['appointmentData'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentoptions')
    //         .then(res => res.json())
    // });

    // React Query with async :
    const { data: appointmentData = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentData', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentoptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;