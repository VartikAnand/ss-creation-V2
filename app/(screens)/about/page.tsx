'use client'
import React from 'react';
import { MdOutlineGirl } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import Link from 'next/link';
import shruti from "./../../../public/img/shruti.png";
import Image from 'next/image';

const About = () => {

  const handleEmailClick = () => {
    const email = 'sscreation@proton.me';
    const mailtoLink = `mailto:${email}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };
  return (
    <section className="text-description-color body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi</h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">I'm <span className='text-primary font-bold'>Shruti</span></h1>
          <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">3D artist and Animator</h3>
          <h2>I bring imagination to life through captivating 3D art and animations, specializing in modeling, texturing, rigging, and animation using industry-standard tools.</h2>
          <div className="flex lg:flex-row md:flex-col pt-8 mt-10 gap-10">
              <button onClick={ handleEmailClick} className="bg-primary inline-flex py-3 px-5 rounded-lg items-center hover:bg-pink-400 focus:outline-none">
                <MdOutlineGirl className="text-3xl text-white mb-1" />
                <span className="ml-4 flex items-center flex-col leading-none justify-center align-middle">
                  <span className="text-xl text-white mb-1">Hire Me</span>
                </span>
              </button>
            <Link href="/contact">
              <button className="bg-primary inline-flex py-3 px-5 rounded-lg items-center hover:bg-pink-400 focus:outline-none">
                <RiContactsFill className="text-lg text-white mb-1" />
                <span className="ml-4 flex items-center flex-col leading-none justify-center align-middle">
                  <span className="text-xl text-white mb-1">Contact Me</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
          <Image
            className="w-full h-full"
            src={shruti}
            alt="img"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
