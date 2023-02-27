import React from 'react';
import { useDispatch } from 'react-redux';
import './style_chosen_city.css';
import { removeFromList } from '../../../../../store/selected_cities_slicer';

function ChosenCity(props) {
  const dispatch = useDispatch();
  const {
    data: { name, id },
    setCity,
  } = props;
  const handleClickCity = (event) => {
    setCity(event.target.textContent);
  };
  return (
    <div className="chosenCity">
      <button
        type="button"
        className="chosenCity__name"
        onClick={handleClickCity}
      >
        {name}
      </button>
      <button
        type="button"
        className="chosenCity__btn"
        onClick={() => dispatch(removeFromList(id))}
      >
        +
      </button>
    </div>
  );
}

export default ChosenCity;
