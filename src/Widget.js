import axios from "axios";
import "./Widget.css";
import { useEffect, useState } from "react";
const Widget = () => {
  const [result, setResult] = useState("");
  const connectionString =
    "https://api.openweathermap.org/data/2.5/weather?q=sisak&appid=a7836725816d0345b0a76f445a7b88eb&units=metric";
  useEffect(() => {
    axios.get(connectionString).then((response) => {
      setResult(response.data);
      console.log(result);
    });
  }, []);

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
    name,
    sys: { country } = "",
    main: { temp } = "",
    wind: { speed } = "",
  } = result;
  return (
    <div className="widget warm-bg">
      <h1>
        {name},{country}
      </h1>
      <p>{dateGenerator(new Date())}</p>
      <p>Temp: {Math.round(temp)}℃</p>
      <p>Wind speed : {speed} km/h</p>
    </div>
  );
};

export default Widget;
