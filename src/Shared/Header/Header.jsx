import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#273240]'>
            <div className="navbar">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src="../../../public/Logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Features</summary>
                                <ul className="p-2 bg-neutral">
                                    <li><a>Menu 1</a></li>
                                    <li><a>Menu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Department</summary>
                                <ul className="p-2 bg-neutral">
                                    <li><a>Menu 1</a></li>
                                    <li><a>Menu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Event</summary>
                                <ul className="p-2 bg-neutral">
                                    <li><a>Menu 1</a></li>
                                    <li><a>Menu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn uppercase me-2 bg-primary border-0 text-white">Login</Link>
                    <Link className="btn uppercase bg-primary border-0 text-white">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;