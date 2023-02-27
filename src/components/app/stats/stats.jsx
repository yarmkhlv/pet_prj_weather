import React from 'react';
import { useSelector } from 'react-redux';
import mostRequestedCity from '../../../additional/functions/most_requested_city';
import './style_stats.css';

function Stats() {
  const citiesStats = useSelector((store) => Object.entries(store.citiesStats));
  const word = mostRequestedCity(citiesStats)
    ? mostRequestedCity(citiesStats)[0].toUpperCase() +
      mostRequestedCity(citiesStats).slice(1)
    : 'недостаточно данных';
  return (
    <div>
      <p className="stats-text-el">{`Самый популярный город : ${word}.`}</p>
      <p className="stats-text-el">
        {`Количество запрошенных разных городов: ${citiesStats.length}.`}
      </p>
    </div>
  );
}

export default Stats;
