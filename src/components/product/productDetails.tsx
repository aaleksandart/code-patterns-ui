import DressProps from "./dressProps"
import ShoeProps from "./shoeProps"

// SRP: sätter detaljerna för en produkt beroende på typ

// OCP: kan läggas till ny produkt typ utan att modifiera
// eller sluta fungera.

export const productDetails = (product: any) => {
    return (
        <>
            {product.shoeType !== undefined ? <ShoeProps shoe={product} /> : <div></div>}
            {product.dressType !== undefined ? <DressProps dress={product} /> : <div></div>}
        </>
    )
}