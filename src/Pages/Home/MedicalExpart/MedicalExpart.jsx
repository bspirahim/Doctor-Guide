import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaBookmark } from "react-icons/fa";



const MedicalExpart = () => {
    return (

        <div className='max-w-screen-lg mx-auto'>
            <div className='text-center my-10 w-3/4 mx-auto'>
                <h1 className='text-3xl font-bold mb-4'>Our Medical Expart</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/expart1.png" alt="Shoes" /></figure>
                        <div className="card-body p-2">
                            <div className='flex justify-between items-center'>
                            <h2 className="card-title">Dr. Emrul Kayes</h2>
                            <FaBookmark></FaBookmark>
                            </div>
                            
                            <p className='text-sm'>MBBS, FCFS, BCS, BSCBS</p>
                            <div className=" flex items-center">
                                <p className='text-base mr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                <button className="btn btn-sm rounded-[6px] text-white font-medium text-base btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/expart2.png" alt="Shoes" /></figure>
                        <div className="card-body p-2">
                            <div className='flex justify-between items-center'>
                            <h2 className="card-title">Dr. Emrul Kayes</h2>
                            <FaBookmark></FaBookmark>
                            </div>
                            
                            <p className='text-sm'>MBBS, FCFS, BCS, BSCBS</p>
                            <div className=" flex items-center">
                                <p className='text-base mr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                <button className="btn btn-sm rounded-[6px] text-white font-medium text-base btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/expart1.png" alt="Shoes" /></figure>
                        <div className="card-body p-2">
                            <div className='flex justify-between items-center'>
                            <h2 className="card-title">Dr. Emrul Kayes</h2>
                            <FaBookmark></FaBookmark>
                            </div>
                            
                            <p className='text-sm'>MBBS, FCFS, BCS, BSCBS</p>
                            <div className=" flex items-center">
                                <p className='text-base mr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                <button className="btn btn-sm rounded-[6px] text-white font-medium text-base btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/expart1.png" alt="Shoes" /></figure>
                        <div className="card-body p-2">
                            <div className='flex justify-between items-center'>
                            <h2 className="card-title">Dr. Emrul Kayes</h2>
                            <FaBookmark></FaBookmark>
                            </div>
                            
                            <p className='text-sm'>MBBS, FCFS, BCS, BSCBS</p>
                            <div className=" flex items-center">
                                <p className='text-base mr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                <button className="btn btn-sm rounded-[6px] text-white font-medium text-base btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="card w-auto bg-base-100 shadow-xl">
                        <figure><img src="../../../../public/expart1.png" alt="Shoes" /></figure>
                        <div className="card-body p-2">
                            <div className='flex justify-between items-center'>
                            <h2 className="card-title">Dr. Emrul Kayes</h2>
                            <FaBookmark></FaBookmark>
                            </div>
                            
                            <p className='text-sm'>MBBS, FCFS, BCS, BSCBS</p>
                            <div className=" flex items-center">
                                <p className='text-base mr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                <button className="btn btn-sm rounded-[6px] text-white font-medium text-base btn-primary">Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MedicalExpart;