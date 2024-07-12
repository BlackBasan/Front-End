import React from "react";
import { Button, Container } from "react-bootstrap";

class ClassTypeComponent extends React.Component {
    // 1ST PART
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            theme: "light",
        };
    }

    // 4TH PART
    componentDidMount() {
        // console.log("ClassTypeComponent componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("ClassTypeComponent componentDidUpdate()");

        if (prevState.counter !== this.state.counter) {
            // console.log("ClassTypeComponent componentDidUpdate() counter");
        }

        if (prevState.theme !== this.state.theme) {
            // console.log("ClassTypeComponent componentDidUpdate() theme");
        }
    }

    componentWillUnmount() {
        // console.log("ClassTypeComponent componentWillUnmount()");
    }

    // 2ND PART
    render() {
        // console.log(
        //     "ClassTypeComponent render() " +
        //         "This is going to run first in the console in every render"
        // );

        // 3RD PART
        return (
            <Container className="my-5 p-5">
                <h1>Class Type Component</h1>
                <Button
                    onClick={() =>
                        this.setState((prev) => ({
                            counter: prev.counter + 1,
                        }))
                    }>
                    INCREMENT
                </Button>
                <p>{this.state.counter}</p>
            </Container>
        );
    }
}

export default ClassTypeComponent;
