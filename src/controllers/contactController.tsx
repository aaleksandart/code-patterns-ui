import { Route } from "react-router-dom";
import Contact from '../views/contactView'

const productsController = (
    <>
        <Route path='contact' element={<Contact />} />
    </>
);

export default productsController;