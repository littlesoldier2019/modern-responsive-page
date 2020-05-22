import React from 'react';
import Header from '../share/Header';
import Hero from './Hero';
import MiddleLine from '../share/MiddleLine';
import Slogan from '../share/Slogan';
import Feature from './Feature';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import ContactForm from '../share/ContactForm';
import Brochure from '../share/Brochure';
import Footer from '../share/Footer';

function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <MiddleLine />
      <Slogan text='"Wij produceren uw stalen deuren &amp; meubels compleet op maat"'/>
      <SectionLeft />
      <SectionRight />
      <Feature />
      <MiddleLine />
      <ContactForm />
      <Brochure />
      <Footer />
    </>
  );
}

export default MainPage;