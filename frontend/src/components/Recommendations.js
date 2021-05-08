import Aos from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';

const Section = styled.section`
    padding: 0rem 0rem;
    h1{
        text-align: center;
        color: rgb(37, 150, 190);
        margin-bottom: 2rem;
        letter-spacing: 2px;
        font-size: 3.5rem;
    }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
   justify-content: center;
   align-items: center; 
`;
const Recommend = styled.div`
    text-align: center;
    width: 17rem;
    height: 17rem;
    border-radius: 10px;
    margin: 1rem;
    padding: 10px;
    box-shadow: 5px 10px 18px #888888;
    color: rgb(37, 150, 190);
   

    img{
        border-radius: 50%;
        width: 50%;
        height: 50%;
        object-fit: cover;
    }
    h3{
        padding: 10px;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.8rem;
    }
    h2{
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
       width:  9rem;
       height: 9rem;

       h3{
            padding: 5px;
            letter-spacing: 2px;
            font-size: 0.8rem;
        }
        h2{
            letter-spacing: 2px;
            font-size: 0.8rem;
            
        }
    }
  
`;
const Star = styled(AiFillStar)`
     color: #f0c040; 
     font-size: 0.6rem;
     
`;

const Recommendations = ({recommends}) => {
    useEffect(() => {
        Aos.init({
          duration : 2000
        });
      }, []);

    return (
        <Section dir="rtl" id="recommends">
            <h1>הלקוחות שלנו ממליצים</h1>
            <Container >
            {recommends.map((recommend, index)=>{
                return(
                <Recommend key={index} data-aos="fade-up"
                data-aos-duration="1500" >    
                    <img src={recommend.image} alt="rating" />
                    <h3>{recommend.content}</h3>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <h2>{recommend.name}</h2>
                </Recommend>
            )})}
                
            </Container>
        </Section>
    )
}

export default Recommendations
