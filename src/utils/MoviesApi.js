export const BASE_URL_BEATFILM_MOVIES = 'https://api.nomoreparties.co';
function getResponseData(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}
export const findMovies = () => {
  return fetch(`${BASE_URL_BEATFILM_MOVIES}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => getResponseData(res));
};
