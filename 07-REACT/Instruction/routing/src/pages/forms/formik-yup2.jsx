import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { object, string } from "yup";

const FormikYup2Page = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    };

    const validationSchema = object({
        firstName: string().required("First name is required!"),
        lastName: string().required("Last name is required!"),
        email: string()
            .email("Invalid email format!")
            .required("Email is required!"),
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Container className="my-5">
            <h1>Formik & Yup 2</h1>
            <Form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-3">
                {/* FIRST NAME */}
                <Form.Group controlId="firstName">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Please enter your first name..."
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text
                        style={{ fontSize: "12px" }}
                        className="text-danger fst-italic">
                        {formik.touched.firstName && formik.errors.firstName}
                    </Form.Text>
                </Form.Group>
                {/* LAST NAME */}
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Please enter your last name..."
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text
                        style={{ fontSize: "12px" }}
                        className="text-danger fst-italic">
                        {formik.touched.lastName && formik.errors.lastName}
                    </Form.Text>
                </Form.Group>
                {/* EMAIL */}
                <Form.Group controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Please enter your email..."
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text
                        style={{ fontSize: "12px" }}
                        className="text-danger fst-italic">
                        {formik.touched.email && formik.errors.email}
                    </Form.Text>
                </Form.Group>
                {/* PHONE NUMBER */}
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phoneNumber"
                        placeholder="Please enter your phone number..."
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text
                        style={{ fontSize: "12px" }}
                        className="text-danger fst-italic">
                        {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber}
                    </Form.Text>
                </Form.Group>
                <Button type="submit">SEND</Button>
            </Form>
        </Container>
    );
};

export default FormikYup2Page;
