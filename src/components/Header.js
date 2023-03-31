import './Header.css';
import {FaCalendar} from 'react-icons/fa';
import React from "react";

const Header = () => {

    return (
        <header>
            <div className="header-left">
                <img src="path/to/icon.png" alt="Icon" />
                <h1>Thomas Arildtoft</h1>
            </div>
            <div className="header-right">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/work">Work</a>
                <hr />
                <a href="https://github.com/Strongside-87"><FaCalendar /></a>
            </div>
        </header>
    );
};

export default Header;
