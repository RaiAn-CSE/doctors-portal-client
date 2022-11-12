import React from 'react';
import chair from '../../../assets/images/chair.png'
import backgroundimg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '../../../assets/images/bg.png'})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;