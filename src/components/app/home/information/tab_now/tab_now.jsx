import { useDispatch, useSelector } from 'react-redux';
import listHasThisCity from '../../../../../additional/functions/list_has_this_city';
import './style_tab_now.css';
import {
  addToList,
  removeFromList,
} from '../../../../../store/selected_cities_slicer';

function TabNow() {
  const dispatch = useDispatch();
  const selectedCitiesStore = useSelector((store) => store.selectedCities);
  const tabNowDetails = useSelector((store) => store.tabNowDetails.data);
  const srcIcon = `http://openweathermap.org/img/wn/${tabNowDetails?.icon}@4x.png`;
  const handleChangeSelected = () => {
    const currentCity = listHasThisCity(
      selectedCitiesStore,
      tabNowDetails?.name
    );
    if (currentCity) {
      dispatch(removeFromList(currentCity.id));
    } else {
      dispatch(addToList(tabNowDetails.name));
    }
  };
  const likeButtonClass = listHasThisCity(
    selectedCitiesStore,
    tabNowDetails?.name
  )
    ? 'tabNow__btn_liked'
    : '';
  return tabNowDetails !== null ? (
    <div className="tabNow">
      <div className="tabNow__temp">{Math.round(tabNowDetails.main.temp)}°</div>
      <div className="tabNow-container-img">
        <img className="tabNow__img" alt="weather" src={srcIcon} />
      </div>
      <div className="tabNow__city">{tabNowDetails.name}</div>
      <button
        className={`tabNow__btn ${likeButtonClass}`}
        type="button"
        aria-label="Add city to favorites"
        onClick={handleChangeSelected}
      />
    </div>
  ) : null;
}

export default TabNow;
