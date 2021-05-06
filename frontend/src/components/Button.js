import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    background:  ${({primary})=> (primary ? 'rgb(37, 150, 190)' : 'CD853F')};
     white-space: nowrap;
     outline: none;
     border: 3px solid #fff;
     min-width: 100px;
     max-width: 200px;
     cursor: pointer;
     text-decoration: none;
     transition: 0.3s;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: ${({big})=> (big ? '16px 40px' : '14px 24px')};
     color: ${({primary})=> (primary ? '#fff' : '#000d1a')};
     font-size: ${({big})=> (big ? '20px' : '14px')};
     font-family: 'Karantina', cursive;
     letter-spacing: 2px;
     font-size: 1.5rem;
     
     &:hover {
         transform: translateY(-5px);
     }
     button{
         padding: 0px;
     }
`;