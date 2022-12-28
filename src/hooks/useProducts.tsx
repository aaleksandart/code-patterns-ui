import axios from 'axios';
import { useEffect, useState } from 'react'
import Products from '../components/products/products';

const useProducts = () => {
    const [products, setProducts] = useState<any[]>([]);

    const getProductsAsync = async () => {
        const response = await axios.get(
            "https://localhost:7223/api/products"
        );
        if (response && response.data) {
            setProducts(response.data)
        }
    };

    useEffect(() => {
        getProductsAsync();
    }, [])

    return (
        <Products products={products} />
    )
}

export default useProducts