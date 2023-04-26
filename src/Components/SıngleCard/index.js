import React from "react";
import dayjs from "dayjs";

const SingleCardComponents = ({item,className,onClick}) =>{

    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const weekdayindex = dayjs.unix(item.dt).day()
    return(
        <li className={className} key={item.moonrise} onClick={onClick}>
            <img alt="day-icon" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
            <span className="day-name">{WEEKDAYS[weekdayindex].slice(0,3)}</span>
            <span className="day-temp">{Math.round(item.temp.max)}°C</span>
        </li>
    )
}

export default SingleCardComponents