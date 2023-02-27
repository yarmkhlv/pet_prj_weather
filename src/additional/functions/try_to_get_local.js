const tryToGetLocalArr = (key) => {
  const keyFromLocal = JSON.parse(localStorage.getItem(key));
  if (keyFromLocal) {
    return keyFromLocal;
  }
  return [
    { name: 'Tokyo', id: '1' },
    { name: 'London', id: '2' },
  ];
};

const tryToGetLocalObj = (key) => {
  const keyFromLocal = JSON.parse(localStorage.getItem(key));
  if (keyFromLocal) {
    return keyFromLocal;
  }
  return {};
};

export { tryToGetLocalArr, tryToGetLocalObj };
