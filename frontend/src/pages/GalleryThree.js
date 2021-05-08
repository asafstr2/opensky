
import imgA from '../RoomsImages/RoomThree/1.jpg';
import imgB from '../RoomsImages/RoomThree/2.jpg';
import imgC from '../RoomsImages/RoomThree/3.jpg';
import imgD from '../RoomsImages/RoomThree/4.jpg';
import imgE from '../RoomsImages/RoomThree/5.jpg';
import imgF from '../RoomsImages/RoomThree/6.jpg';
import imgG from '../RoomsImages/RoomThree/7.jpg';
import imgH from '../RoomsImages/RoomThree/8.jpg';
import imgI from '../RoomsImages/RoomThree/9.jpg';
import imgJ from '../RoomsImages/RoomThree/10.jpg';
import imgK from '../RoomsImages/RoomThree/11.jpg';
import imgL from '../RoomsImages/RoomThree/12.jpg';
import imgM from '../RoomsImages/RoomThree/13.jpg';
import imgN from '../RoomsImages/RoomThree/14.jpg';
import imgO from '../RoomsImages/RoomThree/15.jpg';
import imgP from '../RoomsImages/RoomThree/16.jpg';
import imgQ from '../RoomsImages/RoomThree/17.jpg';
import imgR from '../RoomsImages/RoomThree/18.jpg';
import imgS from '../RoomsImages/RoomThree/19.jpg';
import imgT from '../RoomsImages/RoomThree/20.jpg';



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



const GalleryThree = () => {
 
  const images = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ, imgK, imgL, imgM, imgN, imgO, imgP, imgQ, imgR, imgS, imgT].map((size) => ({
    src: `${size}`,
  }));

  return (
    <Section>
      <h1>סוויטה 3</h1>
    <Carousel images={images} />
  </Section>
  );
};

export default GalleryThree;