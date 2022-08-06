import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import ZonesPage from './pages/zones/ZonesPage'
import WelcomePage from './pages/welcome/WelcomePage';
import { Provider } from 'react-redux'
import store from './redux/store';

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


