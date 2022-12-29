import { Route } from "react-router-dom";
import Contact from '../views/contactView'

//SRP: Innehåller vår route till contact.
//OCP: Kan lägga till nya routes utan att modifiera existerande kod.

const contactController = (
    <>
        <Route path='contact' element={<Contact />} />
    </>
);

export default contactController;