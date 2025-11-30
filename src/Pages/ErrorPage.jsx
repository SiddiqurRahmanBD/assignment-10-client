import React from 'react';
import { Link } from 'react-router';
import errorImage from "../assets/error_image.png"
import Navbar from '../Components/Navbar ';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
      <div>
        <title>Error</title>
        <Navbar/>
        <div className="mx-auto mb-5 ">
          <title>Error 404</title>
          <div className="flex justify-center items-center">
            <img src={errorImage} alt="" className='w-100 h-100'  />
          </div>
          <div>
            <div className="text-center ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
                Oops, page not found!
              </h1>
              <p className="text-gray-700 pt-5">
                The page you are looking for is not available.
              </p>
              <div className="flex justify-center mt-5">
                <Link
                  to="/"
                  className="bg-green-700 py-2 px-5  rounded-md font-semibold hover:cursor-pointer hover:bg-red-400"
                >
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      
    );
};

export default ErrorPage;