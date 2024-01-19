import React from 'react';
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#273240]'>
            <footer className="footer py-20 text-base-content max-w-screen-lg mx-auto">
                <aside className=''>
                    <img  className='font-semibold' src="../../../public/Logo.png" alt="" />
                    <p className='font-normal text-base text-white my-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut cras velit senectus id tellus aliquam enim felis. Sed commodo cursus tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus arcu eget.</p>
                    <div className='flex space-x-2'>
                        <FaTwitter className='bg-primary p-1 text-white w-6 h-6 rounded cursor-pointer'></FaTwitter>
                        <FaLinkedinIn className='bg-primary p-1 text-white w-6 h-6 rounded cursor-pointer'></FaLinkedinIn>
                        <FaFacebookF className='bg-primary p-1 text-white w-6 h-6 rounded cursor-pointer'></FaFacebookF>
                    </div>
                </aside>
                <nav className='text-white'>
                    <header className="footer-title mb-4">Our Services</header>
                    <a className="link link-hover">Bills & Insurance</a>
                    <a className="link link-hover">Cancer Screening</a>
                    <a className="link link-hover">Cardiac Surgery</a>
                    <a className="link link-hover">Neurology</a>
                    <a className="link link-hover">Covid-19 Vaccine</a>
                </nav>
                <nav className='text-white md:mx-2 '>
                    <header className="footer-title text-white mb-4">Contact Us</header>
                    <div className='flex justify-center items-start'>
                        <img src="../../../public/icon/location.png" alt="" />
                        <p className='ms-2'>1234 Uttara Khal Pahr, <br /> Image Osman Center,<br />
                            Sonargao, Janapath,</p>
                    </div>
                    <div className='flex justify-center items-start'>
                        <img src="../../../public/icon/phone.png" alt="" />
                        <p className='ms-2 my-2'>+09876543211</p>
                    </div>
                    <div className='flex justify-center items-start'>
                        <img src="../../../public/icon/🦆 icon _email_.png" alt="" />
                        <p className='ms-2'>doctorguide@example.com</p>
                    </div>
                </nav>
                <nav className='text-white'>
                    <header className="footer-title text-white mb-4">Doctors Schedule</header>
                    <p className='py-1'>At vero eos et accusam et justou dolores et ea rebum tet clita kasd gubergren no sea takimata.</p>
                    <p className='btn btn-primary text-white text-base font-medium mt-4'>
                        <img src="../../../public/icon/uparrow.png" alt="" />
                        View Schedule
                    </p>
                </nav>
            </footer>
            <footer className="footer items-center pb-4 bg-neutral text-neutral-content max-w-screen-lg mx-auto ">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2022. All Rights Reserved. Made with  by Solutya.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>Latest news</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;