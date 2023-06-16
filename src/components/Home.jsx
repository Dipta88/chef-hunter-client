import React from 'react';
import Banner from './Banner';
import Section1 from '../Section1';
import Section2 from '../Section2';
import TopItems from '../TopItems';
import About from '../About';
import Chefsec from '../Chefsec';


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TopItems></TopItems>
        <About></About>
        <Section1></Section1>
        <Section2></Section2>
       
        
        <Chefsec></Chefsec>
        
      
        
        </div>
    );
};

export default Home;