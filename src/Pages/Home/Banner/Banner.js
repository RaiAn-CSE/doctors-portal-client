import React from 'react';
import chair from '../../../assets/images/chair.png'
import backgroundImg from '../../../assets/images/bg.png'
import BtnComponents from '../../../BtnComponents/BtnComponents';

const Banner = () => {
    return (
        <div className="hero rounded-lg"
            style={{
                background: `url(${backgroundImg})`
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <BtnComponents>Get Started</BtnComponents>
                </div>
            </div>
        </div>
    );
};

export default Banner;