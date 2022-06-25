import axios from "axios";
import "./Widget.css";
import { useEffect, useState } from "react";

const Widget = () => {
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("Zagreb");
  let connectionString = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_APIKEY}&units=metric`;


  useEffect(() => {
    axios.get(process.env.CONNECTIONSTRING).then((response) => {
      setResult(response.data);
    });
  }, [result]);

  const dateGenerator = (date) => {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let number = date.getDate();
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day}  ${number} ${month} ${year} `;
  };

  let {
    name = "",
    sys: { country } = "",
    main: { temp } = "",
    weather: { 0: { main } = "" } = "",
    wind: { speed } = "",
  } = result;
  return (
    <div className={temp > 15 ? "widget warm-bg" : "widget cold-bg"}>
      <input
        className="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.charCode == 13) setResult("");
        }}
        type="text"
      />
      <h1 className="cityname">
        {name},{country}
      </h1>
      <p className="date">{dateGenerator(new Date())}</p>
      <p className="temp">{Math.round(temp)}℃</p>
      <p className="desc"> {main}</p>
      <p className="wind">Wind speed : {speed} km/h</p>
    </div>
  );
};

export default Widget;
