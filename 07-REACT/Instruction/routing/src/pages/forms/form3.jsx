import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form3Page = () => {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phoneNumber: "4124189249884",
    });

    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <Container className="my-5">
            <h1>Form 3</h1>
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                {/* FIRST NAME */}
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Please enter your name..."
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Form.Group>
                {/* LAST NAME */}
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Please enter your last name..."
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>
                {/* EMAIL */}
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Please enter your name..."
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                {/* PHONE NUMBER */}
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Please enter your name..."
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="mt-4" type="submit">
                    SEND
                </Button>
            </Form>
        </Container>
    );
};

export default Form3Page;
