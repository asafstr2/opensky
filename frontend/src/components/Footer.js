import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import wave from '../images/wave.svg';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 0rem 0rem;
    color: #fff;
    background-image: url(${wave});
    background-size: cover;
    background-repeat: no-repeat;
    
    h2{
           letter-spacing: 2px;
           font-size: 3rem;
           margin-bottom: 2rem;
           padding-right: 2rem;
          
       }
       h3{
     
           text-align: center;
           padding: 1rem;
           letter-spacing: 2px;
           font-size: 1.5rem;
           
    
        }
       
        
        @media  screen and (max-width: 768px) {     
        padding: 0;  
        h2{
            color: #fff;
           letter-spacing: 2px;
           font-size: 3rem;
           margin-bottom: 2rem;
           padding-right: 2rem;
          
       }
             
    }
`;



const FooterData = styled.div`
 margin-top: 0rem;
 padding-top: 5rem;
        h2{
            color: #fff;
            font-family: 'Karantina', cursive;
            letter-spacing: 2px;
            font-size: 2rem;
            padding-left: 2rem;
            padding-right: 3rem;       }
        h3{
      
            text-align: center;
            font-size: 1rem;
            font-family: 'Karantina', cursive;
            letter-spacing: 2px;
            font-size: 1rem;
        }

  
    @media  screen and (max-width: 768px) {
        padding-top: 0rem;
        h2{
            
           color: #fff;
            font-family: 'Karantina', cursive;
            letter-spacing: 2px;
            font-size: 1.2rem;
            padding-top: 7rem;
            padding-right: 0.5rem;
        }
        h3{
      
            text-align: center;
            font-size: 1rem;
            letter-spacing: 2px;
            font-size: 1rem;
        }
           
       /* display: flex;
       flex-direction: row;
       justify-content: left;
       margin: -1rem;
       padding: 0rem; */
          
       }
`;

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <Section dir="rtl">

                <FooterData>

                    <h2>השמים הם הגבול...<br />אבל כשהם פתוחים אין גבול</h2>
                    
                    

                    <h3>אפיון עיצוב ובניה - מנחם אביטן</h3>

                </FooterData>
               

            </Section>


        </>
    )
}

export default Footer;
