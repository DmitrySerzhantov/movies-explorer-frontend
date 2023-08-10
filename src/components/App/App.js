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
import {checkToken, getUserProfile, login, register} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useEffect, useState} from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
const userEmail = localStorage.getItem('email');

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  let location = useLocation();
  const navigate = useNavigate();

  const path = ['/movies', '/saved-movies', '/'].find(
    (i) => i === location.pathname
  );

  useEffect(() => {
    if (userEmail) {
      getUserProfile()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    tokenCheck();
  }, [loggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleRegister(name, password, email) {
    register(name, password, email)
      .then((res) => {
        if (res.data) {
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tokenCheck = () => {
    checkToken()
      .then((user) => {
        localStorage.setItem('email', user.email);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleLogin(password, email) {
    login(password, email)
      .then((data) => {
        if (data) {
          localStorage.setItem('email', email);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App '>
        <div className='App__wrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />

            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute loggedIn={loggedIn} element={SavedMovies} />
              }
            />
            <Route
              path='/profile'
              element={<ProtectedRoute loggedIn={loggedIn} element={Profile} />}
            />
            <Route
              path='/movies'
              element={<ProtectedRoute loggedIn={loggedIn} element={Movies} />}
            />

            <Route path='/signin' element={<Login onLogin={handleLogin} />} />
            <Route
              path='/signup'
              element={<Register handleRegister={handleRegister} />}
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
