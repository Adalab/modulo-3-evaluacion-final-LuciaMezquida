"use strict";

const apiUrl =
  "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const apiCall = () => {
  return fetch(url).then((response) => response.json());
};

export { apiCall };
