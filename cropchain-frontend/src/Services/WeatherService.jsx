import api from './api';

const weatherService = {
  getCurrentWeather: async (location) => {
    const response = await api.get(`/weather/current?location=${location}`);
    return response.data;
  },

  getForecast: async (location, days = 7) => {
    const response = await api.get(`/weather/forecast?location=${location}&days=${days}`);
    return response.data;
  },

  getWeatherAlerts: async (location) => {
    const response = await api.get(`/weather/alerts?location=${location}`);
    return response.data;
  }
};

export default weatherService;