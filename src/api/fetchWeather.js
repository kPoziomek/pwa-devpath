import axios from 'axios';

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const lat = 49.77;
const lon = 18.97;
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;

export const fetachWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: ApiKey,
    },
  });

  return data;
};
