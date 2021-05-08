import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Bars from '../images/Bars.svg';
import logo from '../images/logo.png';
// import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
    z-index: 1;
    position: fixed;
    width: 100%;
    background: rgba(146, 170, 179, 0.596);
    background-size: cover;

    @media  screen and (max-width: 768px) {
        padding: 0.5rem ;
        }
   
`;


const Logo = styled(Link)`
  width: 10%;
  padding: 1rem;
    img{
        width: 160%;
        height: 100%;
        object-fit: cover;
    }
    @media  screen and (max-width: 768px) {
        width: 20%;
        padding: 1rem 0rem;
            img{
            width: 150%;
            height: 100%;
            object-fit: cover;
            }
        }
    

`;
const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 1.5rem;
        right: 0;
        transform: translate(-50%, 25%);

    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled.div`
    text-decoration: none;
    a{
        letter-spacing: 2px;
        font-size: 2.5rem;
        font-weight: bold;
        text-decoration: none;
        padding:  1rem;
        color: rgb(37, 150, 190);
    }
   
`;
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    a{
        text-decoration: none;

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

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to = "/">
                <img src={logo} alt='שמים פתוחים'/>
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
               
                    <NavMenuLinks >
                        <a href="#about" >אודות</a>
                        <a href="#images" >תמונות</a>
                        <a href="#recommends" >לקוחות-ממליצים</a>
                        <a href="#map" >מפה</a>
                        {/* <a href ="#contact">לעוד פרטים</a> */}
                    </NavMenuLinks>
                
            </NavMenu>
            <NavBtn>
            <a href ="#contact"><button >צור קשר</button></a>
            </NavBtn>
               
                
                    
                
           
           
        </Nav>
    )
}

export default Navbar
