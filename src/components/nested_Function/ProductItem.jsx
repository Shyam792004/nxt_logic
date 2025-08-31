import React from 'react'

function ButtonComponent()
{
    return <button>Click</button>
}
const ProductItem = ({singleProductItem,index}) => {
  return (
    <div>
    <p>{singleProductItem}</p>
    <ButtonComponent/>
    </div>

  )
}

export default ProductItem;