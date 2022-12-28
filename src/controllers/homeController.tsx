import { Route } from 'react-router-dom'

//Views
import Home from "../views/homeView"

const homeController = (
    <>
        <Route index element={<Home />} />
    </>
);

export default homeController;