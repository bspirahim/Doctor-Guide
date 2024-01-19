import React from 'react';

const MedicalCare = () => {
    return (
        <section className='max-w-screen-lg mx-auto my-12'>
            <div className='text-center my-10'>
                <h1 className='text-3xl font-bold'>Our Medical Care</h1>
                <p>Services We Provide</p>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (7).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Orthopedic Clinic</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26.png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Cardiac Surgery</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (2).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Cancer Screening</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (3).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Neurology</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (4).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Pediatric & Adult Audiology</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (5).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Neurology</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (6).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Hearing Tests & Aids</button>
                </div>
                <div className="card w-auto bg-base-100 shadow-xl">
                    <img src="../../../../public/medical-care/Rectangle 26 (7).png" alt="" className="rounded-t-2xl" />
                    <button className="btn btn-sm text-white bg-[#6e27e0] rounded-none ">Orthopedic Clinic</button>
                </div>
                
            </div>
            <div className='text-center'> 
                <button className='text-white uppercase  btn btn-primary mt-10'>Load More Departments</button>
                </div>
        </section>
    );
};

export default MedicalCare;