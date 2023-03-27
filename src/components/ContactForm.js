import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };
        // TODO: Implement code to send data to personal email
        console.log(data);
    };

    return (
        <div className="contact-form-container">
            <div className="about-me-container">
                <div className="about-me-text">
                    <h3>About Me</h3>
                    <p>
                        Interactive Front-end developer. I'm Riccardo Zanutta, a 22-year-old
                        Italian Freelance Front-end developer. I'm a weird guy who likes
                        making weird things with web technologies. I like to resolve design
                        problems, create smart user interface and imagine useful
                        interaction, developing rich web experiences & web applications.
                        When not working or futzing around with code, I study how to escape
                        from University. Actually for hire.
                    </p>
                </div>
            </div>
            <div className="contact-form">
                <h3>Let’s talk.</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
