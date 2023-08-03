import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  let location = useLocation();

  const path = ['/movies', '/saved-movies', '/'].find(
    (i) => i === location.pathname
  );
  return (
    <div className='App '>
      <div className='App__wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Routes>
          <Route path={path} element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
