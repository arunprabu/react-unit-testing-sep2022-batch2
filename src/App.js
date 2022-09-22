import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  const auth = {
    isLoggedIn: true,
    username: 'johnw',
    fullName: 'John Williams',
    lastLogin: '22/Sep/2022'
  }

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>  
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
