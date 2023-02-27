/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL_WEATHER, API_KEY } from '../additional/const';
import { updCitiesStats } from './cities_stats_slicer';

export const fetchNowDetails = createAsyncThunk(
  'tabNowDetails/fetchNowDetails',
  async (cityName, { rejectWithValue, dispatch }) => {
    try {
      const url = `${SERVER_URL_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('ServerError');
      }

      const data = await response.json();

      dispatch(updCitiesStats(data.name));

      return {
        main: {
          temp: data.main.temp,
          tempFeels: data.main.feels_like,
        },
        name: data.name,
        icon: data.weather[0].icon,
        weather: data.weather[0].main,
        sys: {
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        },
        timezone: data.timezone,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tabNowDetailsSlicer = createSlice({
  name: 'tabNowDetails',
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchNowDetails.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchNowDetails.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.data = action.payload;
    },
    [fetchNowDetails.rejected]: (state, action) => {
      state.staus = 'rejected';
      state.error = action.payload;
    },
  },
});

export default tabNowDetailsSlicer.reducer;
export const { update } = tabNowDetailsSlicer.actions;
