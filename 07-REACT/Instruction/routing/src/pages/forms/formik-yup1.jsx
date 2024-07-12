import { Button, Container, Form } from "react-bootstrap";
import { object, string } from "yup";
import { useFormik } from "formik";

const FormikYup1Page = () => {
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = object({
        username: string().required("Username is required!"),
        password: string().required("Password is required!"),
    });

    const handleSubmit = (values) => {
        event.preventDefault();
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <Container className="my-5">
            <h1>Formik & Yup 1</h1>
            <Form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-4">
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Please enter your username..."
                        value={formik.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.username &&
                            `*${formik.errors.username}`}
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        placeholder="Please enter your password..."
                        value={formik.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <Form.Text className="text-danger">
                        {formik.touched.password &&
                            `*${formik.errors.password}`}
                    </Form.Text>
                </Form.Group>
                <Button type="submit">SEND</Button>
            </Form>
        </Container>
    );
};

export default FormikYup1Page;
