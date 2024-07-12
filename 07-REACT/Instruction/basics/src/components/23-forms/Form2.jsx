import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form2 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            phoneNumber,
        };
        console.log(formData);
    };

    return (
        <Container className="my-5">
            <h1>Form 2</h1>
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                {/* FIRST NAME */}
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Please enter your name..."
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                {/* LAST NAME */}
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Please enter your last name..."
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                {/* EMAIL */}
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Please enter your name..."
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                {/* PHONE NUMBER */}
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Please enter your name..."
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-4" type="submit">
                    SEND
                </Button>
            </Form>
        </Container>
    );
};

export default Form2;
