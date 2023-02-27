import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChosenCity from './chosen_city/chosen_city';
import './style_added_locations.css';

function AddedLocations(props) {
  const selectedCitiesStore = useSelector((store) => store.selectedCities);

  useEffect(() => {
    localStorage.setItem('selectedCities', JSON.stringify(selectedCitiesStore));
  }, [selectedCitiesStore]);

  const { setCity } = props;
  const displayChosenCities = selectedCitiesStore.map((obj) => (
    <ChosenCity data={obj} key={obj.id} setCity={setCity} />
  ));
  return (
    <div className="added-locations">
      <div className="added-locations__title">Added Locations:</div>
      <div className="added-locations__field">{displayChosenCities}</div>
    </div>
  );
}

export default AddedLocations;
