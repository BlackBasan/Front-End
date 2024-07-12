const Jsx4 = () => {
    const names = ["John", "Jane", "Joe", "Jack"];
    const cities = ["London", "New York", "Paris", "Berlin"];

    // const namesMapped = names.map((name, index) => name);
    // console.log(namesMapped);

    // const myFunction = (city, index) => <option key={index}>{city}</option>;

    return (
        <div>
            <h1>JSX — 4</h1>
            <h2>NAMES</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
                {cities.map((city, index) => (
                    <option key={index + 4}>{city}</option>
                ))}
                {/* {[<li>John</li>, <li>Jane</li>, <li>Joe</li>]} */}
            </ul>
            {/* <p>{["John", "Jane", "Joe"]}</p> */}
            <p>JohnJaneJoe</p>
            <select>
                {cities.map((city, index) => (
                    <option key={index}>{city}</option>
                ))}
            </select>
        </div>
    );
};

export default Jsx4;
