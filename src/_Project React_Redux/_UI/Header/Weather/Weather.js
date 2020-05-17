import React, { useEffect, useState} from "react";
import style from "./Weather.module.css";

import wind from "./Icons/wind_120368.ico";
import term from "./Icons/thermometer-with-high-temperature_icon-icons.com_54634.ico";


const Weather = ({weather}) => {
   const [time, setTime] = useState(new Date().toLocaleTimeString())

    const icons = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d", "01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"];

    let icon = icons.filter(icon=> icon === weather.weather[0].icon).join(" ");

    const weatherNow = (weather.weather[0].description.length<8?weather.weather[0].description
        :weather.weather[0].description.split(" ").map(s => `${s.length>5?s.slice(0, 5)+".":s} `));


    useEffect(  () => {
       const time2 = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

        return ()=>{
        clearInterval(time2)
        }
    }, []);

    return (

            <div className={style.Weather}>
                <p>Город: {weather.name}</p>
                <p>Погода: {weatherNow}<img className={style.WeathIcon} src={`/icons/${icon}.png`} alt=""/></p>

                <p>Температура: {Math.round(weather.main.temp)} °С <img className={style.Term} src={term} alt=""/></p>
                <p>Ветер: { Math.round(weather.wind.speed)} <img className={style.Wind} src={wind} alt=""/></p>
                <div className={style.Time}> { time }</div>
            </div>
    );
};
export default Weather