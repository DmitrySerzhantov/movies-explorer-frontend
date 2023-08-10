export const BASE_URL = 'http://localhost:3000';
function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}
export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res));
};

export const savedMovie = (dataForSavingMovie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(dataForSavingMovie),
  }).then((res) => getResponseData(res));
};
export const deleteMovie = (_id) => {
  return fetch(`${BASE_URL}/movies/${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => getResponseData(res));
};

export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({name, password, email}),
  }).then((res) => getResponseData(res));
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({password, email}),
  }).then((res) => getResponseData(res));
};

export const logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(),
  }).then((res) => getResponseData(res));
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res));
};

export const getUserProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res));
};
