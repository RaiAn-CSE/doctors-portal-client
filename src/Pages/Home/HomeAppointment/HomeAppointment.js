import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import bdAppointment from '../../../assets/images/appointment.png'
import BtnComponents from '../../../BtnComponents/BtnComponents';

const HomeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${bdAppointment})`
            }}
        >
            <div className="hero rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:flex lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <BtnComponents>Appointment</BtnComponents>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;