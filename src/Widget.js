import axios from "axios";
import { useEffect, useState } from "react";
const Widget = () => {
  const [result, setResult] = useState("");
  const connectionString =
    "https://api.openweathermap.org/data/2.5/weather?q=sisak&appid=a7836725816d0345b0a76f445a7b88eb";
  useEffect(() => {
    axios.get(connectionString).then((response) => {
      setResult(response.data);
      console.log(result);
    });
  }, []);

  return <div>{result.id}</div>;
};

export default Widget;
