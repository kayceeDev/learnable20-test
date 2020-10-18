import React from 'react';
import ProductBodyComp from '../../components/Body/ProductBodyComp';
import SecondNavigation from '../../components/Header/SecondNavigation';
import './style.css'
const ProductDesign = () => {
  return (
    <div>
      <SecondNavigation/>
      <ProductBodyComp />
    </div>
  );
};

export default ProductDesign;