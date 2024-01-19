import React from 'react';

const Banner = () => {
    return (
        <section className='max-w-screen-lg mx-auto my-16'>
        <div className='grid md:grid-cols-3 gap-4'>
          <div>
            <img className='mb-12 w-1/4' src="/Dot Grid (1).png" alt="" />
            <p className='text-3xl font-bold'>Find the Care</p>
            <p className='text-3xl font-bold'>You Need</p>
            <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
            <button className="btn mt-5 bg-[#FF8B42]">Make Appoinment</button>
          </div>
          <div className='w-3/4  rounded'>
            <img className='' src="/doctor.png" alt="" />
          </div>
          <div className='w-3/4 rounded'>
            <img className='' src="/nurse.png" alt="" />
          </div>
        </div>

      </section>
    );
};

export default Banner;