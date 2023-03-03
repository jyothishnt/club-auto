import React from 'react';
import { useLocation, useRoutes, BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'src/content/app/login/Login';
import Button from 'src/shared/components/button/Button';
import Home from 'src/content/home/Home'

import routesConfig from './routes/routesConfig';
import './App.css';
import Register from './content/app/register/Register';
import { NotFoundErrorScreen } from './shared/components/error-screen';

function App() {
  // const routes = useRoutes(routesConfig);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/*' element={<NotFoundErrorScreen />}></Route>
            </Routes>
          {/* {routes} */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
