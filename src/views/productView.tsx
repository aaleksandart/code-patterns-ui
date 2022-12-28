import UseProduct from "../hooks/useProduct"

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