import { Routes, Route} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import ZonesPage from './pages/zones/ZonesPage'
import WelcomePage from './pages/welcome/WelcomePage';
import './app.css'

const App = () => {

  return (
    <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index  element={<WelcomePage/>} />
          <Route path='zones' element={<ZonesPage/>} />
        </Route>
    </Routes>
  );

}

export default App;
