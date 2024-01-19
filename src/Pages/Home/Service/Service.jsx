import React from 'react';

const Service = () => {
    return (
        <section className='max-w-screen-lg mx-auto pb-16'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <img src="/banner2nd.png" alt="" />
                </div>
                <div className='w-10/12 self-center'>
                    <div className='md:mt-2'>
                        <p className='md:text-3xl font-bold'>Sick Kid? How to Deal with a </p>
                        <p className='md:text-3xl font-bold'>Child’s Fever: 4 Steps</p>
                    </div>
                    <div className='my-10'>
                        <div className='flex items-center mb-2'>
                            <img className='w-4 h-4' src="../public/Vector.png" alt="" />
                            <p className='ms-2'>Cras sit sed nec a nunc</p>
                        </div>
                        <div className='flex items-center mb-2 '>
                            <img className='w-4 h-4' src="../public/Vector.png" alt="" />
                            <p className='ms-2'>Tempor mauris mauris in</p>
                        </div>
                        <div className='flex items-center mb-2 '>
                            <img className='w-4 h-4' src="../public/Vector.png" alt="" />
                            <p className='ms-2'>Nibh turpis praesent pretium</p>
                        </div>
                        <div className='flex items-center mb-2 '>
                            <img className='w-4 h-4' src="../public/Vector.png" alt="" />
                            <p className='ms-2'>Cras sit sed nec a nunc</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;