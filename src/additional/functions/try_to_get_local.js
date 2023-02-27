const tryToGetLocalArr = (key) => {
  const keyFromLocal = JSON.parse(localStorage.getItem(key));
  if (keyFromLocal) {
    return keyFromLocal;
  }
  return [];
};

const tryToGetLocalObj = (key) => {
  const keyFromLocal = JSON.parse(localStorage.getItem(key));
  if (keyFromLocal) {
    return keyFromLocal;
  }
  return {};
};

export { tryToGetLocalArr, tryToGetLocalObj };
