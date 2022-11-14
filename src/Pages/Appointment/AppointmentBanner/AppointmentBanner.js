import React from 'react';
import chair from '../../../assets/images/chair.png'
import backgroundImg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <header className="hero rounded-lg"
            style={{
                background: `url(${backgroundImg})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    >
                    </DayPicker>
                    <p>You picked {format(selected, 'PP')}.</p>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;