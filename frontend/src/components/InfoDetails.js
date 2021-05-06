import React, { useEffect } from 'react';
import {GoLocation} from 'react-icons/go';
import {FaBath} from 'react-icons/fa';
import {GiCoffeeCup} from 'react-icons/gi';
import {GrMultimedia} from 'react-icons/gr';
import {GiMusicSpell} from 'react-icons/gi';
import Smarthome from '../images/smart-home.png';
import {RiSafeLine} from 'react-icons/ri';
import styled from 'styled-components';
import Aos from 'aos';
import wave from '../images/wave.svg';

const Section = styled.section`
   padding: 5rem 0rem;
   width: 100%;
    height: 100%;
    padding: 2rem 0rem;
   
    background-image: url(${wave});
   
    background-size: cover;
    background-repeat: no-repeat;
   
`;

const Container = styled.div`
    display: flex;
   flex-direction: column;
   justify-content: right;
  
   h1{
       text-align: center;
       color: rgb(37, 150, 190);
       margin-bottom: 2rem;
        letter-spacing: 2px;
        font-size: 3.5rem;
   }
   h3{
        color: skyblue;
        display: inline-block;
        font-weight: bold;
        margin-right: 1rem;
        padding-bottom: 2rem;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
    }
`;

const Location = styled(GoLocation)`
    font-size: 2em;
    margin-right: 1rem;
    margin-top: 0.5rem;
      
`;
const Bath = styled(FaBath)`
    font-size: 2em;
    margin-right: 1rem;
    
`;
const Bar = styled(GiCoffeeCup)`
    font-size: 2em;
    margin-right: 1rem;
`;
const MultiMedia = styled(GrMultimedia)`
    font-size: 2em;
    margin-right: 1rem;
`;
const Music = styled(GiMusicSpell)`
     font-size: 2em;
     margin-right: 1rem;
`;
const SafeBox = styled(RiSafeLine)`
    font-size: 2em;
    margin-right: 1rem;
`;
const SmartHome = styled.div`
img{
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
}
   
`;
const InfoDetails = () => {

    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);

    return (
        <Section dir='rtl'>
            <Container>
                <h1>מה בסוויטות?</h1>
                <ul>
                    <li  data-aos="zoom-out-left">
                        <Location />
                        <h3>מיקום אסטרטגי בלב העיר העתיקה</h3>
                    </li>
                    <li data-aos="zoom-out-left">
                        <Bath />
                        <h3>ג'קוזי</h3>
                    </li >
                    <li data-aos="zoom-out-left">
                        <Bar />
                        <h3>מיני בר ופינת קפה מפנקת</h3>
                    </li>
                    <li data-aos="zoom-out-left">
                        <MultiMedia />
                        <h3>מערכת מולטימדיה</h3>
                    </li>
                    <li data-aos="zoom-out-left">
                        <Music />
                        <h3>מערכת מוזיקה פנטסטית</h3>
                    </li>
                    <li data-aos="zoom-out-left">
                        <SmartHome>
                        <img src={Smarthome} alt='smart-home' />
                        <h3>בית חכם</h3>
                        </SmartHome> 
                    </li>
                    <li data-aos="zoom-out-left">
                        <SafeBox />
                        <h3>כספת</h3>
                    </li>
                </ul>
                
               
               
                
                
               
                
               
            </Container>
        </Section>
    )
}

export default InfoDetails;
