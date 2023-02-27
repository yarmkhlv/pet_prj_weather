import { configureStore, combineReducers } from '@reduxjs/toolkit';
import selectedCitiesSlicer from './selected_cities_slicer';
import citiesStatsSlicer from './cities_stats_slicer';
import tabForecastSlicer from './tab_forecast_slicer';
import tabNowDetailsSlicer from './tab_now_details_slicer';

const rootReducer = combineReducers({
  tabForecast: tabForecastSlicer,
  tabNowDetails: tabNowDetailsSlicer,
  selectedCities: selectedCitiesSlicer,
  citiesStats: citiesStatsSlicer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
