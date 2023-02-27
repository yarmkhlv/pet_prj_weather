function mostRequestedCity(arr) {
  let counter = null;
  let popularCity = null;
  arr.forEach((city) => {
    const [cityName, cityValue] = city;
    if (cityValue > counter || counter === null) {
      counter = cityValue;
      popularCity = cityName;
    }
  });
  return popularCity;
}

export default mostRequestedCity;
