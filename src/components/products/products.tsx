import { IProduct } from "../../models/productModel";
import Product from "../product/product"

interface IProducts {
    products: IProduct[]
}
const products = (props: IProducts) => {
    const { products } = props;
    return (
        <>
            <div className='products-view'>
                <div className='products-grid'>
                    {
                        products && products.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default products