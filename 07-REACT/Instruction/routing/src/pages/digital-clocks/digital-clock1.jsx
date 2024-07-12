import "./digital-clock1.scss";

const DigitalClock1Page = () => {
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

    return (
        <div className="digital-clock digital-clock-1">
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

export default DigitalClock1Page;
