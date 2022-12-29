import { Route } from 'react-router-dom'
import Product from '../views/productView'
import Products from '../views/productsView'

//SRP: Innehåller våra routes gällande products.
//OCP: Kan lägga till nya routes utan att modifiera existerande kod.

const productsController = (
    <>
        <Route path='products' element={<Products />} />
        <Route path='product/:productType/:id' element={<Product />} />
    </>
);

export default productsController;
