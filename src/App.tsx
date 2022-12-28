import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//Components
import Navbar from "./components/shared/navbar";
import productsController from "./controllers/productsController"
import homeController from './controllers/homeController';
import contactController from './controllers/contactController';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            {contactController}
            {homeController}
            {productsController}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
