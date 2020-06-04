import React from 'react';
import SubHero from '../share/SubHero';
import MiddleLine from '../share/MiddleLine';
import ProductDetail from './ProductDetail';


const ProductItem = () => {
  return (
    <>
        <SubHero title='Products'/>
        <MiddleLine />
        <ProductDetail />
    </>
  );
}

export default ProductItem;