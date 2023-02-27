import React from 'react';
import { useSelector } from 'react-redux';
import WeatherByTime from './weather_by_time/weather_by_time';
import './style_tab_forecast.css';

function TabForecast() {
  const tabForecast = useSelector((store) => store.tabForecast.data);
  const displayWeatherDataByTime =
    tabForecast !== null
      ? tabForecast.listInfo.map((obj) => (
          <WeatherByTime data={obj} key={obj.dt} />
        ))
      : null;
  return displayWeatherDataByTime !== null ? (
    <div className="tabForecast">
      <div className="tabForecast__city-name">{tabForecast.cityInfo.name}</div>
      <div className="tabForecast__list-by-time">
        {displayWeatherDataByTime}
      </div>
    </div>
  ) : null;
}

export default TabForecast;
