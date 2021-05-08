import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import logo from '../images/logo.png';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:rgb(37, 150, 190);
    color: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '1' : '0')};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')};
    a{
        

    }
    img{
        top: 10%;
        margin-left: 25%;
        margin-right: 25%;
        width: 50%;
        height: 50%;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #fff;
`;


const DropdownLink = styled.div`
a{
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    letter-spacing: 2px;
    font-size: 2.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
    padding-top: 0rem;

}
    &:hover{
        color: #000d1a;
    }
    button{
        
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        max-width: 250px;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem ;
        color: #fff;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        
        &:hover {
            transform: translateY(-5px);
        }
    }
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            
               
                   
                        <DropdownLink >
                            <a href="#about" >אודות</a>
                            <a href="#images" >תמונות</a>
                            <a href="#recommends" >לקוחות ממליצים</a>
                            <a href="#map" >מפה</a>
                            <a href = "#contact">
                                <button>לעוד פרטים</button>
                            </a>
                        </DropdownLink>
                    
                        <img src={logo} alt="logo" />
               
        </DropdownContainer>
    )
}

export default Dropdown
