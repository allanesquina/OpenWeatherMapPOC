import { useEffect, useState, useContext } from "react";
import WeatherInfo from "../components/WeatherInfo";

import { OWMService } from "../services/Openweathermap";
import { GeolocationContext } from "../containers/Geolocation";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [tryAgain, setTryAgain] = useState(null);
  const geoContext = useContext(GeolocationContext);

  const handleUpdateClick = () => {
    setWeather(null);
  };

  const handleTryAgainClick = () => {
    setTryAgain(true);
  };

  const getData = () => {
    OWMService.getWeatherByGeoCoord(geoContext)
      .then((result) => {
        setError(null);
        setTryAgain(null);
        setWeather(result);
      })
      .catch((err) => {
        setError(err);
        setTryAgain(null);
        console.error(err);
      });
  };

  useEffect(() => {
    // If there is no info then call the API service
    if (!weather) {
      getData();
    }
  }, [weather]);

  useEffect(() => {
    if (tryAgain) {
      getData();
    }
  }, [tryAgain]);

  if (error !== null) {
    return (
      <div>
        <span>Ops! Tivemos um problema.</span>
        <button onClick={handleTryAgainClick}>Tentar novamente</button>
      </div>
    );
  }

  if (!weather) {
    return <div>Consultando estações...</div>;
  }

  return (
    <div className="">
      <WeatherInfo data={weather} />
      <button onClick={handleUpdateClick}>Atualizar</button>
    </div>
  );
}

export default Weather;
