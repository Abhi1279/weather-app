
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherData, getDailyData } from '../services/weatherService';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (cityName = 'Pune') => {
    const response = await getWeatherData(cityName);
    return getDailyData(response);
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cityName: 'Pune',
    isCelsius: true,
    weatherData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    toggleTemperatureUnit: (state) => {
      state.isCelsius = !state.isCelsius;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export const { setCityName, toggleTemperatureUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
