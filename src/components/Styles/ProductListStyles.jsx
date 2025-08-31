import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../nested_Function/ProductItem';
import "./Styles.css"


const ProductList = ({name,city,list_of_products}) => {
    // console.log(props);
    // const {name,city}=props;

    const flag=false;
    // function rendertextBLock(getFlag)
    // {
    //   return getFlag?name:city;
    // }
    
  return (
    <div>
        <h3 className='title'>E-Commerce Project</h3>
        <h4>name is:{name}</h4>
        <h4>city is:{city}</h4>

        {rendertextBLock(flag)}
        <h3>ProductListStyles</h3>
                {/* <li key={index}>{item}</li> */}
         <ul>
            {list_of_products.map((item,index)=>(
                <ProductItem singleProductItem={item} key={index}/>
            ))
            }
         </ul>
    </div>
  )
}

export default ProductList;