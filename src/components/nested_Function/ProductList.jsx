import React from 'react'
import ProductItem from './ProductItem';

const dummyProductData=['Product 1','Product 2','Product 3'];
const ProductList = () => {
  return (
    <div>
         <h3>ProductList</h3>
         <ProductItem/>
    </div>

  )
}

export default ProductList