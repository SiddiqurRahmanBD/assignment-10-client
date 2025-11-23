import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar ';

const MainLayout = () => {
    return (
      <div className='min-h-screen'>
        <header>
         <Navbar/>
        </header>
        <main className="flex-1 mx-auto px-5">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
};

export default MainLayout;