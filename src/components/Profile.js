import React from 'react';
import './Profile.css';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

const Profile = () => {
    return (
        <div className="Profile">
            <img src="/path/to/profile-img.png" alt="Profile" />
            <h2>Thomas Arildtoft</h2>
            <h3><a href="https://www.google.com/maps/place/Roskilde,+Denmark" target="_blank" rel="noopener noreferrer">Roskilde, Denmark</a></h3>
            <hr />
            <div>
                <a href="https://github.com/Strongside-87"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/thomas-arildtoft-0b5b3b1b3/"><FaLinkedin /></a>
                <a href="https://twitter.com/TArildtoft"><FaTwitter /></a>
                <a href="https://www.youtube.com/channel/UCb--2H87xbqZ0AtT5UNSC_g"><FaYoutube /></a>
                <a href="https://instagram.com/thomasarildtoft"><FaInstagram /></a>
            </div>
        </div>
    );
};

export default Profile;
