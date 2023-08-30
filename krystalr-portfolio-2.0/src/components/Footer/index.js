import React from 'react';
import './style.css';

const Footer = () => {
 const icons = [
  {
    name: 'fab-fa-github',
    link: 'https://github.com/MsKryssy',
  },
  {
    name: 'fab-fa-linkedin',
    link: 'https://www.linkedin.com/in/krystalwilliams2/',
  },
  {
    name: 'fab-fa-twitter',
    link: 'https://twitter.com/MsKryssyBabyy',
  },
 ];
 return (
  <footer className="d-flex justify-content-center align-items-center">
    {icons.map((icon) => (
     <a href={icon.link} key={icon.name} target="_blank" rel="noreferrer"  className="mx-3">
      <i className={icon.name}></i>
      </a>
))}
   </footer>
 );
};

export default Footer;