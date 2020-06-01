import React from 'react';
import SubHero from '../share/SubHero';
import MiddleLine from '../share/MiddleLine';
import ProductDetail from '../product/ProductDetail';


const Product = () => {
  return (
    <>
        <SubHero title='Products'/>
        <MiddleLine />
        <ProductDetail />
    </>
  );
}

export default Product;