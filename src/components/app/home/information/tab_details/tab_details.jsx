import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import makeTimeLocal from '../../../../../additional/functions/make_time_local';
import './style_tab_details.css';

function TabDetails() {
  const tabNowDetails = useSelector((store) => store.tabNowDetails.data);
  const localSunrise = makeTimeLocal(
    tabNowDetails?.sys.sunrise,
    tabNowDetails?.timezone
  );
  const localSunset = makeTimeLocal(
    tabNowDetails?.sys.sunset,
    tabNowDetails?.timezone
  );
  return tabNowDetails !== null ? (
    <div className="tabDetails">
      <div className="tabDetails__city">{tabNowDetails.name}</div>
      <div className="tabDetails__block-info">
        <div className="tabDetails__element">
          Temperature:{Math.round(tabNowDetails.main.temp)}°
        </div>
        <div className="tabDetails__element">
          Feels like:{Math.round(tabNowDetails.main.tempFeels)}°
        </div>
        <div className="tabDetails__element">
          Weather:{tabNowDetails.weather}
        </div>
        <div className="tabDetails__element">
          Sunrise: {format(new Date(localSunrise), 'HH:mm')}
        </div>
        <div className="tabDetails__element">
          Sunset: {format(new Date(localSunset), 'HH:mm')}
        </div>
      </div>
    </div>
  ) : null;
}

export default TabDetails;
