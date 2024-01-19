import React from 'react';

const Schedule = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-16'>
            <div className='grid md:grid-cols-10 gap-0'>
                <div className='col-span-4 ps-16'>
                    <h1 className='text-3xl font-bold text-[#273240] mb-12'>Doctors Schedule Today</h1>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink  w-7/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-7/12'>
                            <p className='text-[#273240] font-bold text-xl'>Dentist Specialist</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-7/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-7/12'>
                            <p className='text-[#273240] font-bold text-xl'>Pediatric</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 '>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-7/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>

                </div>
                <div className='col-span-6 text-right '>
                    <img className='h-[600px] mx-auto' src="../../../../public/schedule.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Schedule;