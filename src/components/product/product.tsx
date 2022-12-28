import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../../models/productModel';

interface IProductProps {
    product: IProduct;
    details?: React.ReactNode;
}


const product = (props: IProductProps) => {

    const shoePic = require('../../assets/images/shoe-img.jpg');
    const dressPic = require('../../assets/images/dress-img2.jpg');

    const { product, details } = props;
    const { id, productType, name, description, barcode, price, color } = product;

    function setImage(productType: string | String) {
        if (productType === 'shoe') {
            return shoePic;
        } else {
            return dressPic;
        }
    }
    return (
        <>
            <div className="card product-card shadow">
                <div className='product-img-container'>
                    <img src={setImage(productType)} className="card-img-top productCardImage shadow" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price: </strong>{price}</li>
                    <li className="list-group-item"><strong>Color: </strong>{color}</li>
                    <li className="list-group-item"><strong>Barcode: </strong> {barcode}</li>

                    {details}
                </ul>
                <div className="card-body product-link-body">
                    <Link id="product-link" className="card-link shadow product-btn" to={`/product/${productType}/${id}`} > Product details </Link>
                    <Link id="products-link" className="card-link shadow product-btn" to={`/products`} > Back to products </Link>
                </div>
            </div>
        </>
    )
}

export default product