import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/image/section-right.jpg';
import Button from '../share/Button';
import Routes from "../../helpers/route";

const SectionRight = () => {
  return (
    <div className='container'>
        <div className="row flex-lg-row-reverse">
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center px-3 px-md-5 section section-item">
                <div>
                    <h2 className="mb-2 mb-md-5">A SIMPLE AND COST-EFFECTIVE PURCHASING PROCESS</h2>
                    <p className='mb-2 mb-md-5'>Kielo's services aim to help clients find the most suitable suppliers. Kielo's partners are working tirelessly on researching and experimenting with new product lines and make use of their experience in manufacturing to manufacture currently scarce goods such as masks and PPEs. Kielo will be responsible for screening manufacturers and assessing product quality. Product assessment also includes assessment of the manufacturers' capability to deliver products whose quality is consistent with the approved sample. We also partner with trusted logistic agencies.</p>
                    <p >After signing a consultancy contract with Kielo, our clients will work, negotiate and sign manufacturing contracts directly with manufacturers. This process allows clients to reach manufacturers directly without having to go through lengthy procedures with different agencies. Kielo will only charge a service fee of 5% of the order's gross value, no addtional or hidden fees, and the service fee can be adjusted for certain orders. Kielo strives to help our clients find the best suppliers on the market. All contracting and payments made with Kielo will take place in Finland where we are based or in other European countries where trade and copyrights are well protected.</p>
                    <Link to={Routes.products}><Button text='check products' type='button'/></Link>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center py-3 py-md-5 my-3 my-md-5 section section-item">
                <img className='py-3 py-md-5' src={image} alt='Kielo Consultancy'/>
            </div>
        </div>
    </div>
  );
}

export default SectionRight;