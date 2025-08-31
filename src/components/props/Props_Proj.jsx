import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../nested_Function/ProductItem';

const Props_Proj = ({name,city,list_of_products}) => {
    // console.log(props);
    // const {name,city}=props;
  return (
    <div>
        <h3>Props</h3>
        <h4>name is:{name}</h4>
        <h4>city is:{city}</h4>
        <h3>ProdList</h3>
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

export default Props_Proj;