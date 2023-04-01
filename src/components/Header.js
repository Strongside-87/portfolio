import './Header.css';
import React from "react";
import Popup from "reactjs-popup";
import ContactForm from "./Contact";

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
                <Popup trigger={<button>Contact me</button>}
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
        </header>
    );
};

export default Header;
