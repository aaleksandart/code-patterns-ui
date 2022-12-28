import { Route } from 'react-router-dom'
import Product from '../views/productView'
import Products from '../views/productsView'

const productsController = (
    <>
        <Route path='products' element={<Products />} />
        <Route path='product/:productType/:id' element={<Product />} />
    </>
);

export default productsController;
