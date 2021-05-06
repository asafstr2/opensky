

import imgA from '../RoomsImages/RoomOne/1.jpg';
import imgB from '../RoomsImages/RoomOne/2.jpg';
import imgC from '../RoomsImages/RoomOne/3.jpg';
import imgD from '../RoomsImages/RoomOne/4.jpg';
import imgE from '../RoomsImages/RoomOne/5.jpg';
import imgF from '../RoomsImages/RoomOne/6.jpg';
import imgG from '../RoomsImages/RoomOne/7.jpg';
import imgH from '../RoomsImages/RoomOne/8.jpg';
import imgI from '../RoomsImages/RoomOne/9.jpg';
import imgJ from '../RoomsImages/RoomOne/10.jpg';
import imgK from '../RoomsImages/RoomOne/11.jpg';
import imgL from '../RoomsImages/RoomOne/12.jpg';
import imgM from '../RoomsImages/RoomOne/13.jpg';
import imgN from '../RoomsImages/RoomOne/14.jpg';
import imgO from '../RoomsImages/RoomOne/15.jpg';


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



const GalleryOne = () => {
 
  const images = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ, imgK, imgL, imgM, imgN, imgO].map((size) => ({
    src: `${size}`,
  }));

  return (
    
    <Section>
      <h1>סוויטה 1</h1>
      <Carousel images={images} />
    </Section>
    
  );
};

export default GalleryOne;