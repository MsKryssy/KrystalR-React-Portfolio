// importing react and headshot
import React from 'react';
import headshot from '../assets/images/krystal-richardson.jpg';


const About = () => {
    return (
        <div className='align-items-center d-flex'>
            <img src={headshot} alt="Krystal Richardson" className='img-fluid rounded me-3' width="175" />
            <p>
                My name is Krystal Richardson (formerly Williams) and I designed this portfolio using React. I have been in 
                a rigorous and challenging, yet rewarding, online bootcamp to learn full stack web development. With this
                portfolio, you will be able to see some of the coursework that we've completed throughout the course of
                bootcamp. This includes some of the things we've learned but not all things, which is why you will be able
                to review my Github account as well.
            </p>
         
            <p>
                Coding has recently become a strong interest of mine over the last year. I am currently still in Human Resources
                and heavy project management, which have been most of my professional career. Project Management was my favorite
                part of HR and this is also a part of the reason I chose to learn web development. I look forward to building and
                adding on to my learned knowledge and skills. Although this will be new and challenging, I am excited to strengthen
                this knowledge.
            </p>
            </div>
    );
};

export default About;