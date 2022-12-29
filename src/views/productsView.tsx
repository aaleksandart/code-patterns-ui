import UseProducts from "../hooks/useProducts"

// SRP: Vy för att visa våra products

// OCP: Kan utökas med funktionalitet genom att lägga
// till fler komponenter.

// DIP: Med hjälp av UseProducts så flyttar vi vårt 
// konkreta beroende för hämtning av produkterna 
// bort från själva vyn.

const ProductsView = () => {
    return (
        <UseProducts />
    )
}

export default ProductsView