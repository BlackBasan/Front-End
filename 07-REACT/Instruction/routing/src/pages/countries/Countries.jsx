import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Country from "../../components/countries/Country";

const CountriesPage = () => {
    const [countries, setCountries] = useState(null);

    // process.env.REACT_APP_API_KEY
    // console.log(countries);

    const getCountries = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_COUNTRIES_BASE_URL}/all`
            );
            // console.log(response.data);
            setCountries(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <Container className="my-5 p-5">
            <h1>COUNTRIES API</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Flag</th>
                        <th>Country Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Continent</th>
                    </tr>
                </thead>
                <tbody>
                    {countries &&
                        countries.map((country, index) => (
                            <Country
                                key={country.cca3}
                                order={index + 1}
                                imgUrl={country.flags?.svg}
                                title={country.name?.common}
                                alt={country.flags?.alt}
                                capital={
                                    country.capital ? country.capital[0] : "N/A"
                                }
                                population={country.population}
                                continent={country.region}
                            />
                        ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CountriesPage;
