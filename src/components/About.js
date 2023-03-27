import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="left-column">
                <h1>About Me</h1>
                <p>I am a developer based in Roskilde, Denmark. I have experience in various web technologies such as React, Node.js, and SQL. In my free time, I enjoy reading books and practicing my coding skills.</p>
            </div>
            <div className="right-column">
                <div className="profile-box">
                    <img src="profile-picture.jpg" alt="Profile picture" />
                    <h2>Thomas Arildtoft</h2>
                    <p>Roskilde, Denmark</p>
                    <hr />
                    <div className="icon-container">
                        <a href="https://github.com"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://discord.com"><i className="fab fa-discord"></i></a>
                        <a href="https://slack.com"><i className="fab fa-slack"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
