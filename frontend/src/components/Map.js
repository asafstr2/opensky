/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect} from 'react';
import styled from 'styled-components';
import mapImg from '../images/google-map-zefat.jpg';
import {BsBoxArrowInDown} from 'react-icons/bs';
import Aos from 'aos';
import WaveTop from '../images/WaveTop.svg';




const Section = styled.section`
  
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    background-image: url(${WaveTop});
    color: #fff;
    background-size: cover;
    background-repeat: no-repeat;
`;

const MapArea = styled.div`
    padding: 0rem;
    h1{
        text-align: center;
        font-family: 'Karantina', cursive;
        letter-spacing: 3px;
        font-size: 2.5rem;
        @media  screen and (max-width: 768px) {
            font-size: 2rem;
            padding-bottom: 1rem;
        }
    }
    h5{
        color: black;
        cursor: pointer;
        text-align: center; 
        position: absolute;
        top: 85%;
        left: 20%;
        transform: translate(-50%, -50%); 
    }
    img{
        width: 100%;
        height: 100%;
        padding: 1rem 8rem;

        @media  screen and (max-width: 1008px) {
            width: 100%;
            height: 85%;
            padding: 1rem 3rem;
        }
 
        @media  screen and (max-width: 768px) {
            width: 100%;
            height: 85%;
            padding: 1rem 2rem;
        }

    }
    img:hover{
            opacity: 0.7;
        }
`;

const DownloadIcon = styled(BsBoxArrowInDown)`
    color: #fff;
   
`;

const DownloadButton = styled.div`
            display: flex;
            justify-content:center;
            align-items:center;
     button{
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        max-width: 250px;
        cursor: pointer;
        transition: 0.3s;
        padding: 1rem ;
        color: #fff;
        letter-spacing: 2px;
        font-size: 1.5rem;
        
        &:hover {
            transform: translateY(5px);
        }
        }
        a{
            padding: 0px;
            text-decoration: none;    
            color: #fff;
            letter-spacing: 2px;
            font-size: 1.5rem;
        }
        @media  screen and (max-width: 768px) {
            display: flex;
            justify-content:center;
            align-items:center; 
        }
`;

const Map = () => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);

     
      
    return (
        <Section id="map">
            <MapArea  data-aos="zoom-in-down">
                <h1>מפת איזור של המתחם להורדה</h1>
                <a href="https://goo.gl/maps/2d4DfNekS65CcDKJ9" target="_blank" rel="noreferrer">
                    <img src={mapImg} alt="map" />   
                </a>
                      
            </MapArea> 
            <DownloadButton>
                <button>
                <a href={mapImg} download><DownloadIcon /> להורדה</a>
                </button>
                
            </DownloadButton>
        </Section>
        
    )
}

export default Map;
