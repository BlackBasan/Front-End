import "./DigitalClock2.scss";

// props validation
// you are going to get props, and these props are going to be like this, so you don't need to worry if they will be empty or not.

const DigitalClock2 = (props) => {
    const date = new Date();
    // console.log("DATE: ", date);
    const day = date.getDate();
   // console.log("DAY: ", day);
    const month = date.getMonth();
   // console.log("MONTH: ", month);
    const year = date.getFullYear();
   // console.log("YEAR: ", year);
    const hours = date.getHours();
   // console.log("HOURS: ", hours);
    const minutes = date.getMinutes();
   // console.log("MINUTES: ", minutes);

    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];

    const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
    ];

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

    return (
        <div style={styles} className="digital-clock digital-clock-1">
            <div className="time">
                {hours}:{minutes}
            </div>
            <div>
                <div className="date">
                    {months[month]} {day}, {year}
                </div>
                <div className="day">
                    {days[date.getDay()]} <span>{timeOfDay}</span>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock2;
