import { Routes, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import ZonesPage from './pages/zones/ZonesPage'
import WelcomePage from './pages/welcome/WelcomePage';
import { useCallback, useEffect } from 'react';
import { testRouter } from './services/api/api.service';
import { Provider } from 'react-redux'
import store from './redux/store';

import './app.css'

function App() {

  return (
    <Provider store={store}>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path='zones' element={<ZonesPage />} />
        </Route>

      </Routes>
    </Provider>
  )

}


export default App


