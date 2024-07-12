import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phoneNumber: "4124189249884",
        gender: "not specified",
        termsOfService: false,
    });

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        termsOfService: "",
    });

    const handleChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        }));
    };

    const validateForm = () => {
        if (!formData.firstName) {
            setError((prev) => ({
                ...prev,
                firstName: "*Please enter your first name.",
            }));
        }
        if (!formData.lastName) {
            setError((prev) => ({
                ...prev,
                lastName: "*Please enter your last name.",
            }));
        }
        if (!formData.email) {
            setError((prev) => ({
                ...prev,
                email: "*Please enter your email address.",
            }));
        }
        if (!formData.phoneNumber) {
            setError((prev) => ({
                ...prev,
                phoneNumber: "*Please enter your phone number.",
            }));
        }
        if (!formData.termsOfService) {
            setError((prev) => ({
                ...prev,
                termsOfService: "*Please accept the terms of service.",
            }));
        }

        if (Object.values(error).some((err) => err === "")) {
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm())
            return console.log("*Please fill in all the fields.");
        console.log("Form submitted successfully!");
        console.log(formData);
    };

    return (
        <Container className="my-5">
            <h1>Form 5</h1>
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
                    <Form.Text className="text-danger">
                        {error?.firstName}
                    </Form.Text>
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
                    <Form.Text className="text-danger">
                        {error?.lastName}
                    </Form.Text>
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
                    <Form.Text className="text-danger">
                        {error?.email}
                    </Form.Text>
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
                    <Form.Text className="text-danger">
                        {error?.phoneNumber}
                    </Form.Text>
                </Form.Group>
                {/* GENDER */}
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        name="gender"
                        value="male"
                        id="male"
                        type="radio"
                        label="Male"
                        onChange={handleChange}
                    />
                    <Form.Check
                        name="gender"
                        value="female"
                        id="female"
                        type="radio"
                        label="Female"
                        onChange={handleChange}
                    />
                    <Form.Check
                        name="gender"
                        value="not specified"
                        id="not-specified"
                        type="radio"
                        label="Not Specified"
                        onChange={handleChange}
                    />
                </Form.Group>
                {/* TERMS OF SERVICE */}
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        name="termsOfService"
                        onChange={handleChange}
                        checked={formData.termsOfService}
                        label="I agree to the terms of service."
                    />
                    <Form.Text className="text-danger">
                        {error?.termsOfService}
                    </Form.Text>
                </Form.Group>
                <Button className="mt-4" type="submit">
                    SEND
                </Button>
            </Form>
        </Container>
    );
};

export default Form5;
