const Country = (props) => {
    return (
        <tr>
            <td>{props.order}</td>
            <td>
                <img src={props.imgUrl} alt={props.alt} width={70} />
            </td>
            <td>{props.title}</td>
            <td>{props.capital}</td>
            <td>{props.population}</td>
            <td>{props.continent}</td>
        </tr>
    );
};

export default Country;
