'use client'
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct the mailto link
    const email = 'sscreation@proton.me';
    const subject = 'Contact Form Submission';
    const body = 'Hello,\n\nI am interested in your services. Please contact me back.\n\nThank you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  const handleInstagramClick = () => {
    // Redirect to the Instagram profile
    window.open('https://www.instagram.com/ss_animation_/', '_blank');
  };
  const handleEmailClick = () => {
    const email = 'sscreation@proton.me';
    const mailtoLink = `mailto:${email}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="text-description-color body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <span className="text-primary font-bold">Contact Me</span>
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={handleSubmit}
              >
                Button
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center gap-5 flex justify-center align-middle items-center">
              <div className="text-indigo-500" onClick={handleInstagramClick}>
         <AiFillInstagram className="text-3xl text-primary hover:text-hover cursor-pointer hover:animate-bounce "/>
              </div>
              <div className="text-indigo-500" onClick={ handleEmailClick}>
         <MdEmail className="text-3xl text-primary hover:text-hover cursor-pointer hover:animate-bounce "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
