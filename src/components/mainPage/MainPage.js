import React from 'react';
import Hero from './Hero';
import MiddleLine from '../share/MiddleLine';
import Slogan from '../share/Slogan';
import Feature from './Feature';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
import ContactForm from '../share/ContactForm';

function MainPage() {
  return (
    <>
      <Hero />
      <MiddleLine />
      <Slogan text='"We have a chance to do something extraordinary. Let love and kindness be our roadmap.”― Johnny Corn'/>
      <SectionLeft />
      <SectionRight />
      <Feature />
      <MiddleLine />
      <ContactForm />
    </>
  );
}

export default MainPage;