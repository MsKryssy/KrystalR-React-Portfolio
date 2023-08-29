import React from 'react';
import Nav from '../Nav';

import bannerImg from '../../assets/images/travel-banner.png';
import './styles.css';

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header className="container-fluid">
      <image src={bannerImg} alt='Traveling Around the World' />
      <div className="container d-lg-flex justify-content-between px-3">
        <h1 className='text-center'>Krystal Richardson</h1>

        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      </div>
    </header>
  );
};

export default Header;