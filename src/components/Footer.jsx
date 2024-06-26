import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
// import Logo from '@/../public/red-logo.png'
import Logo from '@/../public/deepFlix_logo_2.svg'
const Footer = () => {
    return (
        <footer className="text-white bg-black">
            <div className="container px-5">
                {/* Footor social media sec */}
                <div className="flex flex-wrap items-center justify-between mb-12 gap-y-6">
                    <div className="text-3xl tracking-wider capitalize logo">
                        <Link href="/">
                            <Image src={Logo} width={200} height={40} />
                        </Link>
                    </div>
                    <div className="flex gap-6 social_icons">
                        <span href="#" className="p-3 bg-[#4267B2] rounded-full hover:bg-[#477fef] duration-300">
                            <i>
                                <FaFacebookF />
                            </i>
                        </span>
                        <span href="" className="p-3 bg-[#1DA1F2] rounded-full hover:bg-[#44a9e8] duration-300">
                            <i>
                                <FaTwitter />
                            </i>
                        </span>
                        <span
                            href="#"
                            target="_blank"
                            className="p-3 rounded-full bg-[#E1306C] hover:bg-[#ef435f] duration-300"
                        >
                            <i>
                                <FaInstagram />
                            </i>
                        </span>
                        <span href="#" className="p-3 bg-[#0077B5] hover:bg-[#47a5f1] rounded-full duration-300">
                            <i>
                                <FaLinkedinIn />
                            </i>
                        </span>
                    </div>
                </div>

                {/* Footers main section */}
                <div className="grid grid-cols-2 gap-4 text-base md:grid-cols-5 gap-y-6">
                    <ul className={`space-y-2 opacity-80`}>
                        <li className="text-lg font-bold !opacity-100 footer_menu_style mb-2">Company </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Get started</a>
                        </li>
                    </ul>
                    <ul className={`space-y-2 opacity-80`}>
                        <li className={`text-lg font-bold !opacity-100 footer_menu_style mb-2`}>Trending</li>
                        <li>
                            <a href="#">Interstellar</a>
                        </li>
                        <li>
                            <a href="#">Oppenheimer</a>
                        </li>
                        <li>
                            <a href="#">The Fall Guy</a>
                        </li>
                        <li>
                            <a href="#">Deadpool</a>
                        </li>
                    </ul>
                    <ul className={`space-y-2 opacity-80`}>
                        <li className={`text-lg font-bold !opacity-100 footer_menu_style mb-2`}>Account</li>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">My account</a>
                        </li>
                        <li>
                            <a href="#">Preferences</a>
                        </li>
                        <li>
                            <a href="#">Purchase</a>
                        </li>
                    </ul>
                    <ul className={`space-y-2 opacity-80`}>
                        <li className={`text-lg font-bold !opacity-100 footer_menu_style mb-2`}>Category</li>
                        <li>
                            <a href="#">Action</a>
                        </li>
                        <li>
                            <a href="#">Thriller</a>
                        </li>
                        <li>
                            <a href="#">Mystery</a>
                        </li>
                        <li>
                            <a href="#">Drama</a>
                        </li>
                    </ul>
                    <ul className="space-y-2 opacity-80">
                        <li className={`text-lg font-bold !opacity-100 footer_menu_style mb-2`}>Subscribe</li>
                        <li>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-4 py-1 bg-transparent border-2"
                            />
                        </li>
                        <li>
                            <input
                                type="button"
                                value="Subscribe"
                                className="w-full px-4 py-1 text-black bg-white hover:bg-blue-500 hover:text-white"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer bottom */}

            <div className="flex flex-wrap justify-center max-w-5xl pb-5 mx-auto md:justify-between pt-7 gap-y-3 ">
                <span>
                    <span className="opacity-80">Copyright © 2024 Deep Flix. </span>
                    <span className="ml-4">All rights reserved</span>
                </span>
                <span className="opacity-80">
                    <Link href="/">Privacy policy</Link>
                    <Link href="/" className="ml-4">
                        Terms & condition
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer
