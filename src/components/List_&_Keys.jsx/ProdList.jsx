import React from 'react'

const dummyProductData=['Product 1','Product 2','Product 3'];
const ProdList = () => {
  return (
    <div>
         <h3>ProdList</h3>
         <ul>
            {dummyProductData.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
            }
         </ul>
    </div>

  )
}

export default ProdList