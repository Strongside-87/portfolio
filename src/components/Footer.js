import React from 'react';
import { FaGithub, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ContactForm from './ContactForm';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-links">
            <div className="footer-left">
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Popup
                    trigger={<button>Contact me</button>}
                    modal
                    nested
                >
                    {(close) => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="content">
                                <ContactForm onClose={close} />
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

            <div className="footer-right">
                <a href="https://github.com/Strongside-87"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/thomas-arildtoft-0b5b3b1b3/"><FaLinkedin /></a>
                <a href="https://twitter.com/TArildtoft"><FaTwitter /></a>
                <a href="https://www.youtube.com/channel/UCb--2H87xbqZ0AtT5UNSC_g"><FaYoutube /></a>
                <a href="https://instagram.com/thomasarildtoft"><FaInstagram /></a>
            </div>
        </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    © {year} Thomas Arildtoft. All Rights Reserved.
                </div>
                <div className="footer-bottom-right">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
