import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
   padding: 1rem 0rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
   
   
`;
const RoomWrapper= styled(Link)`
    text-align: center;
    width: 17rem;
    height: 17rem;
    margin: 1rem;
    padding: 10px;text-decoration: none;
    

    img{
       
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 0;
    }
    img:hover{
        opacity: 0.5;
        width: 103%;
        height: 103%;
    }

    h1{
        text-align: center;
        color: rgb(37, 150, 190);
        letter-spacing: 3px;
        font-size: 1.5rem;
        padding-bottom: 0.5rem;
       
    }

    @media  screen and (max-width: 768px) {     
        width: 10rem;
        height: 10rem;
        margin: 0rem;
        padding: 0rem;
        text-decoration: none;
        h1{
            font-size: 150%;
        }
    
    }
   
`;

const Room= styled.div`
    box-shadow: 5px 10px 18px #888888;
    margin: 0rem 0.5rem;
    border-radius: 10px;
    padding: 5px;
`;

const Rooms = ({rooms}) => {
    return (
        <Section id="images">
            <Container>
                {rooms.map((room, index)=>(
                    
                    
                    <RoomWrapper to={room.link} key={index}> 
                    <Room>
                       
                        <h1>{room.title}</h1>
                        
                   
                      
                      <img src={room.image} alt={room.alt} />
                    </Room>
                   
                           
                     
                    </RoomWrapper>
                ))}

            </Container>
        </Section>
    )
}

export default Rooms
