import React from "react";
import ContactForm from "./Contact_Form";
import Profile from "./Profile";
import "./Contact.css";

const ContactProfile = () => {
    return (
        <div style={{ display: "flex" }}>
            <ContactForm />
            <Profile />
        </div>
    );
};

export default ContactProfile;
