import React from 'react';
import Header from '../share/Header';
import Hero from './Hero';
import MiddleLine from '../share/MiddleLine';
import Slogan from './Slogan';
import Feature from './Feature';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import ContactInfo from '../share/ContactInfo';

function MainPage() {
  return (
    <>
      {/* <Header />
      <Hero />
      <MiddleLine />
      <Slogan />
      <SectionLeft />
      <SectionRight /> */}
      <Feature />
      <MiddleLine />
      <ContactInfo />
    </>
  );
}

export default MainPage;