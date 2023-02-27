const listHasThisCity = (arr, nameCity) => {
  const findedOrNot = arr.find((element) => element.name === nameCity);
  return findedOrNot;
};

export default listHasThisCity;
