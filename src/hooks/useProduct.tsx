import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product/product";
import { productDetails } from "../components/product/productDetails";

// SRP: En uppgift, att hämta en produkt.

// OCP: Kan utökas utan att modifieras. Tack vare "details?" i vår Product
// så kan vi utöka produkten med så kallad composition vilket är att
// föredra framför arv i React.

// LSP: Product kan utökas med hjälp av composition.
// Där vi kan lägga till valfria properties till vår produkt.
// Vi skickar in vår hämtade produkt i productDetails där
// specifika properties beroende på produkttyp sätts.

// DIP: Med hjälp av useProduct så flyttar vi beroendet,
// själva kopplingen till api och hämtning av produkt iväg från
// produkt vyn. Vi skickar sen tillbaka en produkt komponent.

const useProduct = () => {
    const [product, setProduct] = useState<any>([]);
    const details = productDetails(product)
    let { id, productType } = useParams();

    useEffect(() => {
        const getProductAsync = async () => {
            const response = await axios.get(
                `https://localhost:7223/api/${productType}/${id}`
            );
            if (response && response.data) {
                setProduct(await response.data);
            }
        }
        getProductAsync()
    }, [id, productType]);
    return (
        <Product product={product} details={details} />
    )
}

export default useProduct