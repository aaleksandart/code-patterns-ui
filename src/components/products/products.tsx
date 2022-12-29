import { IProductModel } from "../../models/productModel";
import Product from "../product/product"

// SRP: Komponent för att visa samtliga produkter och dess 
// grund data oavsett typ. För att se specifik produkt data 
// får man gå in på specifik produkt.

// OCP: Komponenten kan utökas utan att modifieras eller sluta
// fungera.

// LSP: Inga arv när samtliga produkter listas upp eftersom
// endast grund data för alla produkter visas och inga specifika
// properties.

// ISP: Vi använder IProductProps för att få in rätt information.
// IProductProps använder i sin tur sig utav ProductModel och dess 
// interface IProduct samt valfri react komponent/React.ReactNode
// för att utöka med fler properties men endast de som behövs.

interface IProducts {
    products: IProductModel[]
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