import { useEffect, useState } from "react";
import "./digital-clock3.scss";
import moment from "moment";

const DigitalClock3Page = (props) => {
    const [date, setDate] = useState(moment());

    const dateFull = date.format("MMMM DD, YYYY");
    const day = date.format("dddd");
    const hours = date.format("HH");
    const minutes = date.format("mm");
    const seconds = date.format("ss");

    let timeOfDay;

    if (hours >= 12 && hours < 18) {
        timeOfDay = "AFTERNOON";
    } else if (hours >= 18 && hours < 20) {
        timeOfDay = "EVENING";
    } else if (hours >= 20) {
        timeOfDay = "NIGHT";
    } else {
        timeOfDay = "MORNING";
    }

    const styles = {
        color: props.color,
        backgroundColor: props.backgroundColor,
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(moment());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div style={styles} className="digital-clock digital-clock-1">
            <div className="time">
                {hours}
                <span
                    style={{
                        opacity: seconds % 2 === 0 ? 1 : 0,
                    }}>
                    :
                </span>
                {minutes}
            </div>
            <div>
                <div className="date">{dateFull}</div>
                <div className="day">
                    {day} <span>{timeOfDay}</span>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock3Page;
