import React from 'react';

const Schedule = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-16'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-3xl font-bold text-[#273240] mb-16'>Doctors Schedule Today</h1>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink  w-5/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-5/12'>
                            <p className='text-[#273240] font-bold text-xl'>Dentist Specialist</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-5/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-5/12'>
                            <p className='text-[#273240] font-bold text-xl'>Pediatric</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                    <div className='flex items-center border-b-2 mb-6'>
                        <p className='grow  mb-6  text-[#EA5262] font-bold text-lg'>08:00</p>
                        <div className=' mb-6 shrink w-5/12'>
                            <p className='text-[#273240] font-bold text-xl'>General Practitioner</p>
                            <small className='text-[#273240]'>Dr. Robbert Algazali</small>
                        </div>
                    </div>
                   
                </div>
                <div className=''>
                    <div  className=' bg-[#0089ba] rounded-xl rounded-tr-[50px]'>
                        <img className='w-11/12' src="../../../../public/doctor2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;