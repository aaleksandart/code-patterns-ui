import axios from 'axios';
import { useEffect, useState } from 'react'
import Products from '../components/products/products';

// SRP: En uppgift, att hämta alla produkter.

// OCP: Kan utökas utan att modifieras.

// DIP: Med hjälp av useProduct så flyttar vi beroendet, till api och hämtning
// av produkterna iväg från vyn med produkterna och själva applikationen. 
// Vi skickar sedan tillbaka en produkt komponent.

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