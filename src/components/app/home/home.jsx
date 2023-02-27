import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchCity from './search_city/search_city';
import Information from './information/information';
import AddedLocations from './added_locations/added_locations';
import './style_home.css';
import { fetchNowDetails } from '../../../store/tab_now_details_slicer';
import { fetchForecast } from '../../../store/tab_forecast_slicer';

function Home() {
  const dispatch = useDispatch();
  const selectedCitiesStore = useSelector((store) => store.selectedCities);
  const citiesStats = useSelector((store) => store.citiesStats);
  const [city, setCity] = useState('');
  useEffect(() => {
    localStorage.setItem('citiesStats', JSON.stringify(citiesStats));
  }, [citiesStats]);
  useEffect(() => {
    localStorage.setItem('selectedCities', JSON.stringify(selectedCitiesStore));
  }, [selectedCitiesStore]);
  useEffect(() => {
    if (city !== '') {
      dispatch(fetchNowDetails(city));
      dispatch(fetchForecast(city));
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
