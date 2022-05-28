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

  let { name, main: { temp } = "", wind: { speed } = "" } = result;
  return (
    <div className="widget">
      <h1>{name}</h1>
      <p>Temp: {temp}℃</p>
      <p>Wind speed : {speed} km/h</p>
    </div>
  );
};

export default Widget;
