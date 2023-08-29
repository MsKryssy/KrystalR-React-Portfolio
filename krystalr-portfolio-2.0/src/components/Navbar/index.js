import React from 'react';
import './style.css'

const Navbar = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <nav className="d-flex align-items-center justify-content-between">
                {pages.map(page => (
                    <li key={page} 
                    className={`${page === currentPage && 'active'}`} 
                    onClick={() => setCurrentPage(page)}>
                        {page}
                    </li>
                ))}
        </nav>
    )
};