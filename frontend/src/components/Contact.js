//import Aos from 'aos';
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Button } from './Button';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FiFacebook } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa';
import { RiTelegramLine } from 'react-icons/ri';


const TelegramIcon = styled(RiTelegramLine)`
    color: skyblue;
    margin: 0.3rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {     
        font-size: 1.5rem;        
    }
`;
const FacebookIcon = styled(FiFacebook)`
    color: skyblue;
    margin: 0.3rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {     
        font-size: 1.5rem;        
    }
`;
const WhatsAppIcon = styled(RiWhatsappLine)`
    color: skyblue;
    margin: 0.3rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {   
        font-size: 1.5rem;       
    }
`;
const InstagramIcon = styled(FaInstagram)`
    color: skyblue;
    margin: 0.3rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {     
        font-size: 1.5rem;         
    }
`;
const WazeIcon = styled(FaWaze)`
    color: skyblue;
    margin: 0.3rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {    
        font-size: 1.5rem;         
    }
`;


const Section = styled.section`
    width: 100%;
    height: 100%;
    color: rgb(37, 150, 190);
    padding-top: 3rem;
   

`;

const Container = styled.div`
    padding: 0rem;
    text-align: center;
    
    h1{
        text-align: center;
        padding-bottom: 2rem;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 3rem;
    }
    
`;

const ContactForm = styled.div`

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
label{
    padding: 1rem 0rem;
}
input{
    border: none;
    border-bottom: 1px solid #000d1a;
    height: 2rem;
    padding: 1rem;
    width: 40%;
    font-size: 1.5rem;
    letter-spacing: 3px;

    @media screen and (max-width: 768px){
        width: 60%;
    }
}
   
`;
const Send = styled.div`
    button{
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        max-width: 250px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem ;
        color: #fff;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-top: 1rem;
        
        &:hover {
            transform: translateY(5px);
        }
        }
`;




export default class Contact extends Component {
constructor(props){
    super(props)
    this.state = {
        name: '',
        phone: '',
        email: '',
    }
}

   changeHandler = (e) =>{
       this.setState({[e.target.name]: e.target.value})
   }


    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
       
        axios.post('/api/form', this.state)
        .then(res => {
            this.resetForm()
            console.log(res);
           
            const MySwal = withReactContent(Swal);
            MySwal.fire({   
                didOpen: () => {
                  MySwal.clickConfirm()
                }
              }).then(() => {
                return MySwal.fire(<p style={{letterSpacing: '3px', fontSize: '2rem'}}>הפניה נשלחה בהצלחה</p>)
              });
            
        }).catch(()=>{
            console.log('message not sent');  
        });
    }

    resetForm = () =>{
        this.setState({
            name: '',
            phone: '',
            email: ''
        })
       
    }
    
    render(){
      const {name, phone, email} = this.state;  
    return (
        
        
        <Section dir="rtl" id="contact" >
            <Container 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <h1>צור איתנו קשר</h1>
                <ContactForm>
                    <form method="POST" onSubmit={this.submitHandler}>
                        
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="שמך"
                            value={name}
                            onChange={this.changeHandler}
                            required
                        />
                        
                        <input 
                            type="number" 
                            name="phone" 
                            placeholder="טלפון"
                            value={phone}
                            onChange={this.changeHandler}
                            required
                        />
                       
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="אימייל"
                            value={email}
                            onChange={this.changeHandler}
                            required
                        />
                        
                        <Send>
                        <button type="submit"  value="שלח">
                         שלח
                         </button>
                        </Send>
                        
                             
                    </form>
                    
                </ContactForm>
                <a href="https://waze.com/ul/hsvc5x9vmb">
                    <WazeIcon />
                    </a>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TelegramIcon />
                    <a href="https://wa.me/972546472080?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A1%D7%95%D7%95%D7%99%D7%98%D7%95%D7%AA%20%D7%A9%D7%9E%D7%99%D7%9D%20%D7%A4%D7%AA%D7%95%D7%97%D7%99%D7%9D">
                    <WhatsAppIcon />
                    </a>
            </Container>
        </Section>
    )

  }
}
