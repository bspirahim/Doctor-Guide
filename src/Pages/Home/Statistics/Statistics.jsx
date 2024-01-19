import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistics = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className='max-w-screen-lg mx-auto bg-gradient-to-t from-[#4C07BC] to-[#0089BA]'>
                <div className='grid md:grid-cols-4 gap-4 py-20'>
                    <div className="card w-auto h-full">
                        <figure className="">
                            <img src="../../../../public/icon/doctor.png" alt="Shoes" className="rounded-xl w-16" />
                        </figure>
                        <div className="card-body items-center p-2 text-white text-center">
                            <h2 className="card-title border-b-2 px-5 text-2xl">
                            {counterOn && <CountUp start={0} end={50} duration={2} delay={0}></CountUp>}
                                </h2>

                            <p className='font-bold text-xl'>Medical Experts</p>
                        </div>
                    </div>
                    <div className="card w-auto h-full">
                        <figure className="pt-8">
                            <img src="../../../../public/icon/bed.png" alt="Shoes" className="rounded-xl w-16 h-full" />
                        </figure>
                        <div className="card-body items-center p-2 text-white text-center">
                            <h2 className="card-title border-b-2 px-5 text-2xl">
                            {counterOn && <CountUp start={0} end={500} duration={2} delay={0}></CountUp>}
                            </h2>

                            <p className='font-bold text-xl'>Hospital Rooms</p>
                        </div>
                    </div>
                    <div className="card w-auto h-full">
                        <figure className="">
                            <img src="../../../../public/icon/Award Cup.png" alt="Shoes" className="rounded-xl w-16" />
                        </figure>
                        <div className="card-body items-center p-2 text-white text-center">
                            <h2 className="card-title border-b-2 px-5 text-2xl">
                            {counterOn && <CountUp start={0} end={20} duration={2} delay={0}></CountUp>}
                            </h2>

                            <p className='font-bold text-xl'>Awwwards Win</p>
                        </div>
                    </div>
                    <div className="card w-auto h-full">
                        <figure className="">
                            <img src="../../../../public/icon/happy.png" alt="Shoes" className="rounded-xl w-16" />
                        </figure>
                        <div className="card-body items-center p-2 text-white text-center">
                            <h2 className="card-title border-b-2 px-5 text-2xl">
                            {counterOn && <CountUp start={0} end={5000} duration={2} delay={0}></CountUp>}
                            </h2>

                            <p className='font-bold text-xl'>Happy Patients</p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default Statistics;