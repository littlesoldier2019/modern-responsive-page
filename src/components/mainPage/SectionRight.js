import React from 'react';
import image from '../../assets/image/section-right.jpg';
import Button from '../share/Button';

const SectionRight = () => {
  return (
    <div className='container'>
        <div className="row flex-md-column-reverse flex-lg-row">
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center py-5 section section-item">
                <img className='py-5' src={image} alt='Kielo Consultancy'/>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center px-xs-2 px-md-5  section section-item">
                <div>
                    <h2 className="mb-5">make the sourcing process become simple and cost effective</h2>
                    <p className='mb-5'>
                        We provide sourcing service to find a suitable factory for your need
                        We do the quilification service, to check the qulificatio with local legistration 
                        We provide on site QC service to ensure the good conformance with the proof sample
                        We coordinate with shipping line to handle the container to your place 
                    </p>
                    <p className='mb-5'>
                        You are brough directly to the seller after signing a consultant agreement with us. The bilingual contract is negotiated and agreed directly between you and factory seller. 
                        Our service charge for management fee is 5% on contract value between you and seller
                        Third party charge is billed directly to you and our service is finding a best party in price, and we in charge for checking the trustworhty of third party. 
                    </p>
                    <Button text='check availability' type='button'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SectionRight;