import axios from 'axios';

const API_KEY = '96134332323b055609c2bb220556a088';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherData = async (city = 'Pune') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

export const getDailyData = (weatherData) => {
  const dailyData = {};
  weatherData.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(' ')[0]; 
    if (!dailyData[date]) {
      dailyData[date] = forecast;
    }
  });
  return Object.values(dailyData).slice(0, 6);
};
