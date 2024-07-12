import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const FunctionTypeComponents = () => {
    // 1ST PART
    const [counter, setCounter] = useState(0);

    // 4TH PART
    useEffect(() => {
        // console.log("FunctionTypeComponent useEffect()");

        return () => {
            // console.log("FunctionTypeComponent useEffect() cleanup");
        };
    }, []);

    useEffect(() => {
        // console.log("FunctionTypeComponent useEffect()");
    });

    // 2ND PART

    // console.log(
    //    "FunctionTypeComponent render() " +
    //        "This is going to run first in the console"
    // );

    // 3RD PART
    return (
        <Container className="my-5 p-5">
            <h1>Function Type Component</h1>
            <Button onClick={() => setCounter((prev) => prev + 1)}>
                INCREMENT
            </Button>
            <p>{counter}</p>
        </Container>
    );
};

export default FunctionTypeComponents;
