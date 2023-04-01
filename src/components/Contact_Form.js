import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Input, Button, Modal } from "semantic-ui-react";
import Swal from "sweetalert2";
import "./Contact_Form.css";

const SERVICE_ID = "service_u0mcwlv";
const TEMPLATE_ID = "template_cbzivon";
const USER_ID = "****************";

export default function ContactForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent Successfully",
                    });
                    setIsModalOpen(true);
                },
                (error) => {
                    console.log(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Ooops, something went wrong",
                        text: error.text,
                    });
                }
            );
        e.target.reset();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Contact">
            <Form onSubmit={handleOnSubmit}>
                <h1>Let's talk.</h1>
                <p>
                    New projects, Freelance inquiry or just a cup of coffee, Feel free to
                    contact me.
                </p>
                <Form.Field
                    id="form-input-name"
                    control={Input}
                    label="What is your full name ? *"
                    name="user_name"
                    required
                />
                <Form.Field
                    id="form-input-control-email"
                    control={Input}
                    label="Your awesome e-mail *"
                    name="user_email"
                    required
                />
                <Form.Field
                    id="form-input-company"
                    control={Input}
                    label="Company"
                    name="company"
                />
                <Form.Field
                    id="form-input-website"
                    control={Input}
                    label="Website"
                    name="user_name"
                />
                <h1>Share your idea with me</h1>
                <p> Shoot me a direct email and I will get in touch with you as soon as possible.</p>
                <Form.Field
                    id="form-input-message"
                    control={Input}
                    label="Write a Message *"
                    name="user_message"
                    required
                />
                <Button type="submit" color="green">
                    Send Message
                </Button>
            </Form>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Modal.Header>Message Sent Successfully</Modal.Header>
                <Modal.Content>
                    <p>Thank you for contacting me. I will get back to you as soon as possible.</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={handleCloseModal} color='green'>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>

    );
}
