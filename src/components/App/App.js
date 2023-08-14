import './App.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {checkToken, getMovies, login, register} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useCallback, useState} from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRouteRegister from '../ProtectedRouteRegister/ProtectedRouteRegister';

function App() {
  const loggedIn = localStorage.getItem('LoggedIn');
  const [currentUser, setCurrentUser] = useState({});
  const [foundMovies, setFoundMovies] = useState([]);

  const [arrSavedMovies, setArrSavedMovies] = useState();
  let location = useLocation();
  const navigate = useNavigate();

  const path = ['/movies', '/saved-movies', '/'].find(
    (i) => i === location.pathname
  );

  function handleRegister(name, password, email) {
    register(name, password, email)
      .then((res) => {
        handleLogin(password, email);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tokenCheck = useCallback(() => {
    checkToken()
      .then((user) => {
        setCurrentUser(user);
        localStorage.setItem('LoggedIn', true);
      })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
      });
  }, []);

  function handleLogin(password, email) {
    login(password, email)
      .then((user) => {
        if (user) {
          localStorage.setItem('LoggedIn', true);
          setCurrentUser(user.data);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getSavedMovies = () => {
    getMovies(currentUser._id)
      .then((res) => {
        setArrSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
        if (err === 'Ошибка: 401') {
          localStorage.clear();
          navigate('/');
        }
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App '>
        <div className='App__wrapper'>
          <Header loggedIn={loggedIn} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  tokenCheck={tokenCheck}
                  foundMovies={foundMovies}
                  setFoundMovies={setFoundMovies}
                  arrSavedMovies={arrSavedMovies}
                  setArrSavedMovies={setArrSavedMovies}
                  loggedIn={loggedIn}
                  getSavedMovies={getSavedMovies}
                  element={SavedMovies}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  tokenCheck={tokenCheck}
                  loggedIn={loggedIn}
                  element={Profile}
                  setFoundMovies={setFoundMovies}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  tokenCheck={tokenCheck}
                  getSavedMovies={getSavedMovies}
                  foundMovies={foundMovies}
                  setFoundMovies={setFoundMovies}
                  arrSavedMovies={arrSavedMovies}
                  setArrSavedMovies={setArrSavedMovies}
                  loggedIn={loggedIn}
                  element={Movies}
                />
              }
            />
            <Route
              path='/signin'
              element={
                <ProtectedRouteRegister
                  tokenCheck={tokenCheck}
                  loggedIn={loggedIn}
                  element={Login}
                  onLogin={handleLogin}
                />
              }
            />

            <Route
              path='/signup'
              element={
                <ProtectedRouteRegister
                  tokenCheck={tokenCheck}
                  loggedIn={loggedIn}
                  element={Register}
                  handleRegister={handleRegister}
                />
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Routes>
            <Route path={path} element={<Footer />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
