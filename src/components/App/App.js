import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route
          path='/saved-movies'
          //   element={}
        />
        <Route
          path='/profile'
          //   element={}
        />
        <Route
          path='/signin'
          //  element={}
        />
        <Route
          path='/signup'
          // element={}
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
