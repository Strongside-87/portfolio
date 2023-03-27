import React from 'react';
import { FaGithub, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-left">
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-right">
                <a href="https://github.com"><FaGithub /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://youtube.com"><FaYoutube /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
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
