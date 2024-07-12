import { useState } from "react";
import { peopleData } from "../../data/people";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import PersonCard from "../../components/born-today/PersonCard";

const BornTodayPage = () => {
    const [people, setPeople] = useState(peopleData);

    const handleData = (type) => {
        if (type === "delete") {
            setPeople([]);
        } else if (type === "get") {
            setPeople(peopleData);
        }
    };

    const handleDeletePerson = (id) => {
        const filteredPeople = people.filter((person) => person.id !== id);
        setPeople(filteredPeople);
    };

    return (
        <Container>
            <h1>BORN TODAY</h1>
            <p>Today {people.length} people was born</p>
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4">
                {people.map((person) => (
                    <PersonCard
                        key={person.id}
                        id={person.id}
                        image={person.image}
                        name={person.name}
                        age={person.age}
                        handleDeletePerson={handleDeletePerson}
                    />
                ))}
            </Row>
            <ButtonGroup className="my-5">
                <Button onClick={() => handleData("delete")} variant="danger">
                    CLEAR DATA
                </Button>
                <Button onClick={() => handleData("get")} variant="warning">
                    GET PEOPLE BACK
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default BornTodayPage;
