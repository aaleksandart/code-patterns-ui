import { Route } from 'react-router-dom'

//Views
import Home from "../views/homeView"

//SRP: Innehåller vår route till home.
//OCP: Kan lägga till nya routes utan att modifiera existerande kod.

const homeController = (
    <>
        <Route index element={<Home />} />
    </>
);

export default homeController;