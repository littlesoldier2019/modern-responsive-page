import React from 'react';
import '../../assets/styles/Brochure.css';
import Image from '../../assets/image/brochure.png';

const Brochure = () => {
  return (
    <div className='brochure my-5'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 col-lg-6 m-auto">
                    <h4 className="text-left mb-5">Download latest brochure</h4>
                    <p>All information about our current offering products. You can find details specification, technical information, material, and further more about our products. </p>
                    <div className="btn-container">
                        <button type="button" className="btn btn-dark px-4 py-2">
                            <a href="#" className="" >
                                <span className="mr-2">download</span>
                                <span>
                                <img className="btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg=="/>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="ol-md-12 col-lg-6 brochure-image">
                    <img src={Image} className="img-fluid" alt="Kielo brochure"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Brochure;

