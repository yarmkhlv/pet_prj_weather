import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import MenuLink from './menu_link/menu_link';
import TabNow from './tab_now/tab_now';
import TabDetails from './tab_details/tab_details';
import TabForecast from './tab_forecast/tab_forecast';
import './style_information.css';

function Information() {
  const tabNowDetailsState = useSelector((store) => store.tabNowDetails);
  const tabForecastState = useSelector((store) => store.tabForecast);
  return (
    <div className="block-info">
      <div className="info">
        <Routes>
          <Route path="tabs-now" element={<TabNow />} />
          <Route path="tabs-details" element={<TabDetails />} />
          <Route path="tabs-forecast" element={<TabForecast />} />
          <Route path="*" element={<Navigate to="tabs-now" replace />} />
        </Routes>
      </div>
      <div className="menu">
        <MenuLink text="Now" path="tabs-now" state={tabNowDetailsState.data} />
        <MenuLink
          text="Details"
          path="tabs-details"
          state={tabNowDetailsState.data}
        />
        <MenuLink
          text="Forecast"
          path="tabs-forecast"
          state={tabForecastState.data}
        />
      </div>
    </div>
  );
}

export default Information;
