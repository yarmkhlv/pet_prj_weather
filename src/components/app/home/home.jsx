import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchCity from './search_city/search_city';
import Information from './information/information';
import AddedLocations from './added_locations/added_locations';
import './style_home.css';
import { getNowDetails } from '../../../store/tab_now_details_slicer';
import { getForecast } from '../../../store/tab_forecast_slicer';

function Home() {
  const dispatch = useDispatch();
  const citiesStats = useSelector((store) => store.citiesStats);
  const [city, setCity] = useState('');

  useEffect(() => {
    localStorage.setItem('citiesStats', JSON.stringify(citiesStats));
  }, [citiesStats]);

  useEffect(() => {
    if (city !== '') {
      dispatch(getNowDetails(city));
      dispatch(getForecast(city));
    }
  }, [city, dispatch]);
  return (
    <div className="block">
      <SearchCity setCity={setCity} />
      <Information />
      <AddedLocations setCity={setCity} />
    </div>
  );
}

export default Home;
