'use client'
import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8 pt-20 " style={{ background: 'linear-gradient(0deg, #f76a89 0%, #ffffff 100%)' }}>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="flex gap-1 justify-center align-middle items-center">
          <img src="/img/logo.png" alt="SS-Creation" className="w-20" />
          <nav className="text-2xl text-primary font-bold">SS-Creation</nav>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
    as="span"
                  href="/about"
              color="blue-gray"
              className=" text-lg cursor-pointer font-semibold transition-colors hover:text-primary focus:text-primary"
            >
              About
            </Typography>
          </li>
          <li>
           
          </li>
          <li>
            <Typography
              as="span"
              href="/contact"
              color="blue-gray"
              className="text-lg cursor-pointer font-semibold transition-colors hover:text-primary focus:text-primary"
            >
              Contact
            </Typography>
          </li>
          <li>
            <Typography
                 as="span"
              href="#"
              color="blue-gray"
              className="text-lg cursor-pointer font-semibold transition-colors hover:text-primary focus:text-primary"
            >
              Buy Me Coffee
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography  className="text-center font-normal text-text-color flex justify-center gap-2">
        &copy; 2023 Shruti Somkuwar<span className="text-primary"> || SS-Creation</span>
      </Typography>
    </footer>
  );
}