
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import './Feedback.css'

const Feedback = () => {
    return (
        <section className='max-w-screen-lg mx-auto my-16'>
            <div style={{ backgroundImage: 'url("../../../../public/feedback.png")', backgroundSize: "cover" }}
                className=' rounded-xl pb-4'
            >
                <h1 className='font-bold text-2xl text-white text-center py-8 pt-10'>Patient Feedback</h1>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='flex justify-center items-center w-3/4 mx-auto mb-10' >
                            <img className='w-[224px] h-[224px]' src="../../../../public/Ellipse 7.png" alt="" />
                            <div className='w-2/4 mx-auto'>
                                <p className='text-base font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='mt-4'>
                                    <p className='font-normal text-sm text-white'>TOM COOPPER</p>
                                    <p className='text-[#FF8B42] text-xs font-semibold'>TOM COOPPER
                                        Managing Director Or Art</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center w-3/4 mx-auto mb-10' >
                            <img className='w-[224px] h-[224px]' src="../../../../public/Ellipse 7.png" alt="" />
                            <div className='w-2/4 mx-auto'>
                                <p className='text-base font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='mt-4'>
                                    <p className='font-normal text-sm text-white'>TOM COOPPER</p>
                                    <p className='text-[#FF8B42] text-xs font-semibold'>TOM COOPPER
                                        Managing Director Or Art</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center items-center w-3/4 mx-auto mb-10' >
                            <img className='w-[224px] h-[224px]' src="../../../../public/Ellipse 7.png" alt="" />
                            <div className='w-2/4 mx-auto'>
                                <p className='text-base font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='mt-4'>
                                    <p className='font-normal text-sm text-white'>TOM COOPPER</p>
                                    <p className='text-[#FF8B42] text-xs font-semibold'>TOM COOPPER
                                        Managing Director Or Art</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Feedback;