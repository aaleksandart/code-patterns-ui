import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/product/product";
import { productDetails } from "../components/product/productDetails";

const useProduct = () => {
    const [product, setProduct] = useState<any>([]);
    const details = productDetails(product)
    let { id, productType } = useParams();

    const getProductAsync = async () => {
        const response = await axios.get(
            `https://localhost:7223/api/${productType}/${id}`
        );
        if (response && response.data) {
            setProduct(await response.data);
        }
    }
    useEffect(() => {
        getProductAsync();
    }, [product.id]);
    return (
        <Product product={product} details={details} />
    )
}

export default useProduct