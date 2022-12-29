import UseProduct from "../hooks/useProduct"

// SRP: Vy för att visa specifik produkt

// OCP: Kan utökas med funktionalitet genom att lägga
// till fler komponenter.

// DIP: Med hjälp av UseProducts så flyttar vi vårt 
// konkreta beroende för hämtning av produkten 
// bort från själva vyn.

const productView = () => {
  return (
    <>
      <div className='product-view'>
        <div className='product-grid'>
          <UseProduct />
        </div>
      </div>
    </>
  )
}

export default productView