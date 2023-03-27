import React, { useState } from 'react';
import './Header.css';
import ContactForm from './ContactForm';

const Header = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleContactButtonClick = () => {
        setShowContactForm(true);
    };

    const handleCloseButtonClick = () => {
        setShowContactForm(false);
    };

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
                <button onClick={handleContactButtonClick}>Contact me</button>
                {showContactForm && <ContactForm onClose={handleCloseButtonClick} />}
            </div>
        </header>
    );
};

export default Header;
