import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='/movies'
          //    element={}
        />
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
    </div>
  );
}

export default App;
