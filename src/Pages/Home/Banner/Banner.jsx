import React from 'react';

const Banner = () => {
  return (
    <section className='mb-32' style={{ backgroundImage: 'url("/bgmain.png")', backgroundSize: "auto",backgroundRepeat:'no-repeat', backgroundPosition: 'left 15px' }}>
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid md:grid-cols-10'>
          <div className='col-span-5 self-center pt-32 ps-20'>
            <p className='text-3xl font-bold'>Find the Care</p>
            <p className='text-3xl font-bold'>You Need</p>
            <p className='mt-3 w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
            <button className="btn mt-5 bg-[#FF8B42] text-white">Make Appoinment</button>
          </div>
          <div className='grid md:grid-cols-2 col-span-5 gap-0'>
            <img className='h-[420px] self-end' src="../../../../public/doctor.png" alt="" />
            <img className='h-[500px] self-end' src="../../../../public/nurse2.png" alt="" />
          </div>
        </div></div>
    </section>
  );
};

export default Banner;