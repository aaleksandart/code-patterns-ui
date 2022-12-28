import DressProps from "./dressProps"
import ShoeProps from "./shoeProps"

export const productDetails = (product: any) => {
    return (
        <>
            {product.shoeType != undefined ? <ShoeProps shoe={product} /> : <div></div>}
            {product.dressType != undefined ? <DressProps dress={product} /> : <div></div>}
        </>
    )
}