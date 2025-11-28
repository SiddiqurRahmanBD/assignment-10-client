import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import foodShare from "../assets/food_share.png";
import xIcon from '../assets/icons8-x-50.png';

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer sm:footer-horizontal text-base-content p-10">
        <nav>
          <div className="flex items-center">
            <img src={foodShare} className="h-20 w-20" alt="" />
            <h1 className=" text-green-700 text-2xl font-bold font-serif">
              Food<span className="text-orange-400">Share</span>
            </h1>
          </div>
          <p>
            “Connecting communities through shared food. <br /> Together, we
            reduce waste and help others eat better.”
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="hover:text-green-700">Help Center</a>
          <a className="hover:text-green-700">FAQs</a>
          <a className="hover:text-green-700">Feedback</a>
          <a className="hover:text-green-700">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="hover:text-green-700">Home</a>
          <a className="hover:text-green-700">Available Foods</a>
          <a className="hover:text-green-700">About us</a>
          <a className="hover:text-green-700">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Get in Touch</h6>
          <p className="flex items-center gap-2">
            <MdEmail size={20} color="green" />
            support@foodshare.com
          </p>
          <p className="flex items-center gap-2">
            <PiPhoneCall size={20} color="green" />
            +880 175 5664564
          </p>
          <div className="grid grid-flow-col gap-4">
            <a>
             <img src={xIcon} alt="X Icon" className="w-7 h-7"  />
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer> 
      <div className="text-center">
       
        <p className="pb-10">
          © 2025 <span className="text-green-700">Food</span>
          <span className="text-orange-400">Share</span>
          — Sharing Food, Spreading Kindness. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
