import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <img src="path/to/icon.png" alt="Icon" />
                <h1>Thomas Arildtoft</h1>
            </div>
            <div className="header-right">
                <a href="/about">About</a>
                <a href="/work">Work</a>
                <a href="/blog">Blog</a>
                <a href="https://github.com/strongside-87" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <button onClick={() => console.log('Contact form triggered')}>Contact me</button>
            </div>
        </header>
    );
};

export default Header;
