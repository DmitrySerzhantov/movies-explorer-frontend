export const BASE_URL = 'https://api.serzhantov.diplom.nomoredomains.xyz';
function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

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

export const logout = (password, email) => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({password, email}),
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
