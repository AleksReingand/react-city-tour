import React from 'react'
import Navbar from './Navbar.scss';
import logo from '../../logo.png';

export default function NavBar(){
    return <nav className="navbar">
        <img src={logo} alt="city logo"/>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    about
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                    tours
                </a>
            </li>
        </ul>
    </nav>
};


