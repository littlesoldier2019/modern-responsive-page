import React from 'react';
import '../../assets/styles/Quotation.css';
import SubHero from '../share/SubHero';
import QuotationForm from './QuotationForm';
import Slogan from '../share/Slogan';
import CentreText from '../share/CentreText';
import MiddleLine from '../share/MiddleLine';

const quotation = {
    title: [
        'get requirements',
        'provide sample',
        'approve sample',
        'produce and deliver'
    ],
    text: [
        'Provide us your requirements in the form below. If you have sample product, please send to us attached with specifications.',
        'We are checking our sample collection and sourcing factories then come back to you with below option. The offer of familiar item if it available to check if you accept it. The offer to make the new sample follow your sample or specification.',
        'Sample proofing. You sign approve sample in at leat 4 copies. Each will be kept by you, the seller, our office in EU, our office in Vietnam.',
        'With the approved sample, and agreed order. We mange factories prodution. Our QC will work on site to follow the sample spec. The On site QC is pefromed on prodution time and before they are loaded into container for going out. Sample cost or free sample will be quote on each situation of order. Please contact us for more detail.'
    ]
}

const Quotation = () => {
  return (
    <>
        <SubHero title='Get Quotation' />
        <Slogan text='Find your products in a simple and easy way'/>
        <MiddleLine />
        <CentreText title={quotation.title[0]} text={quotation.text[0]}/>
        <MiddleLine />
        <CentreText title={quotation.title[1]} text={quotation.text[1]}/>
        <MiddleLine />
        <CentreText title={quotation.title[2]} text={quotation.text[2]}/>
        <MiddleLine />
        <CentreText title={quotation.title[3]} text={quotation.text[3]}/>
        <QuotationForm />
    </>
  );
}

export default Quotation;

