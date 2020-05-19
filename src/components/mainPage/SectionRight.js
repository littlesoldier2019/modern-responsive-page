import React from 'react';
import image from '../../assets/image/section-right.jpg';
import Button from '../share/Button';

const SectionRight = () => {
  return (
    <div className='container'>
        <div class="row">
            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center py-5 section section-item">
                <img src={image} alt='Kielo Consultancy'/>
            </div>
            <div class="col-sm-12 col-md-6 d-flex justify-content-center align-items-center p-5  section section-item">
                <div>
                    <h2 class="mb-5 px-5">Stalen deuren op maat</h2>
                    <p className='mb-5 px-5'>Bij Groener Stalen Interieur worden alle stalen deuren altijd naar uw wensen ontworpen en geproduceerd. Door het gebruik van staal zijn veel stijlvolle, stoere en strakke ontwerpen mogelijk.</p>
                    <p className='mb-5 px-5'>Daarnaast leveren wij een aantal verschillende typen deuren: taats-, schuif- en scharnierdeuren. Daarnaast produceren wij stalen raamkozijnen welke het plaatje compleet maken.</p>
                    <Button text='More information' type='button'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SectionRight;