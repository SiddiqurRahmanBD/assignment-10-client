import React from 'react';
import Navbar from '../Components/Navbar ';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default AuthLayout;