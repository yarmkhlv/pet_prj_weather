/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_URL_FORECAST, API_KEY, STATUS } from '../additional/const';

const normalizerForecast = (data) => ({
  cityInfo: data.city,
  listInfo: data.list,
});

export const getForecast = createAsyncThunk(
  'tabForecast/getForecast',
  async (cityName, { rejectWithValue }) => {
    try {
      const url = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('ServerError');
      }

      const data = await response.json();

      return normalizerForecast(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tabForecastSlicer = createSlice({
  name: 'tabForecast',
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getForecast.pending]: (state) => {
      state.status = STATUS.loading;
      state.error = null;
    },
    [getForecast.fulfilled]: (state, action) => {
      state.status = STATUS.resolved;
      state.data = action.payload;
    },
    [getForecast.rejected]: (state, action) => {
      state.staus = STATUS.rejected;
      state.error = action.payload;
    },
  },
});

export default tabForecastSlicer.reducer;
export const { update } = tabForecastSlicer.actions;
