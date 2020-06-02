import React from 'react';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import Space from '../share/Space';
import NewsBoard from '../news/NewsBoard';

const News = () => {
  return (
    <>
        <SubHero title='News'/>
        <Slogan text='Latest news on our shippments and updates on custom policies'/>
        <MiddleLine />
        <NewsBoard />
        <Space height='3rem'/>
    </>
  );
}

export default News;

