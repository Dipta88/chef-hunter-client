import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

    

const Main = () => {
    const location =useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
      {noHeaderFooter || <Header></Header>}
        
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
        
        
     
        
       
      
        </div>
    );
};

export default Main;