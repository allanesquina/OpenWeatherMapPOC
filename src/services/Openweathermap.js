const BASE_URI = "http://api.openweathermap.org";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY || "";

export const OWMService = {
  getWeatherByGeoCoord: (coord) => {
    const { latitude, longitude } = coord;
    const params = new URLSearchParams({
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      lang: "pt_br",
      units: "Metric",
    });

    return fetch(`${BASE_URI}/data/2.5/weather?${params}`).then((response) =>
      response.json()
    );
  },
};
