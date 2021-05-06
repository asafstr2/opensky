

import imgA from '../RoomsImages/RoomTwo/1.jpg';
import imgB from '../RoomsImages/RoomTwo/2.jpg';
import imgC from '../RoomsImages/RoomTwo/3.jpg';
import imgD from '../RoomsImages/RoomTwo/4.jpg';
import imgE from '../RoomsImages/RoomTwo/5.jpg';
import imgF from '../RoomsImages/RoomTwo/6.jpg';
import imgG from '../RoomsImages/RoomTwo/7.jpg';
import imgH from '../RoomsImages/RoomTwo/8.jpg';
import imgI from '../RoomsImages/RoomTwo/9.jpg';
import imgJ from '../RoomsImages/RoomTwo/10.jpg';
import imgK from '../RoomsImages/RoomTwo/11.jpg';
import imgL from '../RoomsImages/RoomTwo/12.jpg';
import imgM from '../RoomsImages/RoomTwo/13.jpg';
import imgN from '../RoomsImages/RoomTwo/14.jpg';
import imgO from '../RoomsImages/RoomTwo/15.jpg';
import imgP from '../RoomsImages/RoomTwo/16.jpg';
import imgQ from '../RoomsImages/RoomTwo/17.jpg';
import imgR from '../RoomsImages/RoomTwo/18.jpg';
import imgS from '../RoomsImages/RoomTwo/19.jpg';
import imgT from '../RoomsImages/RoomTwo/20.jpg';
// import imgU from '../imageRoomsTwo/21.jpg';
// import imgV from '../imageRoomsTwo/22.jpg';
// import imgW from '../imageRoomsTwo/23.jpg';



import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 15rem;
  background: skyblue;

  h1{
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin: 0.5rem;
    letter-spacing: 3px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 1rem;
    }

`;



const GalleryTwo = () => {
 
  const images = [imgQ, imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ, imgK, imgL, imgM, imgN, imgO, imgP,  imgR, imgS, imgT].map((size) => ({
    src: `${size}`,
    sizes: '(max-width: 100px) 100px, (max-width: 2000px) 700px, 1000px',
  }));

  return (
    <Section>
      <h1>סוויטה 2</h1>
      <Carousel images={images} style={{ul: 'none'}}/>
    </Section>
  );
};

export default GalleryTwo;