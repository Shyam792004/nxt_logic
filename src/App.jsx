import React from "react"
import ClassComp from "./components/compon/classComp"
import FuncComp from "./components/compon/FuncComp"
import ProductList from "./components/nested_Function/ProductList"
import ProdList from "./components/List_&_Keys.jsx/ProdList"
import Props_Proj from "./components/props/Props_Proj"
import ProductListStyles from "./components/Styles/ProductListStyles"
import State_setState from "./components/state/State_setState"
import LifeCycleInClass from "./components/lifecycle_class/LifeCyleInClass"



const dummyProductData_1=["Product-1","Product-2","Prodduct-3"];

function App() {

  return (
    <>
        {/* <ClassComp/> */}
        {/* <FuncComp/> */}
        {/* <ProductList/> */}
        {/* <ProdList/>
        <Props_Proj list_of_products={dummyProductData_1} name="Shyam" city="cbe"/>
        <ProductListStyles list_of_products={dummyProductData_1} name="Shyam" city="cbe"/> */}
        {/* <State_setState/> */}
        <LifeCycleInClass/>
    </>
  )
}

export default App
