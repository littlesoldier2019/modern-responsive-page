import React, { useContext } from 'react';
import '../../assets/styles/Brochure.css';
import { ProductContext } from '../../contexts/ProductContext';

const Brochure = () => {
    const { products, error } = useContext(ProductContext);
    let errorMessage;
    let product;
    let image;
    if (!products || products.length === 0 || error) {
        return errorMessage = <div>"Please refresh the page"</div>
    } else {
        const { name, downloadImage } = products[0].fields;
        product = name;
        image = <img src={downloadImage.fields.file.url} className="p-5" alt="Kielo brochure" />
    }
    return (
        <>
            {(errorMessage) ? { errorMessage } : (
                <div className='brochure my-2 my-md-5'>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 m-auto">
                                <h4 className="text-left mb-2 mb-md-5">Download our latest brochure</h4>
                                <p>All information about products currently offered: <span className='text-uppercase'>{product} </span>. You can find specification of details, technical information, materials, and more.</p>
                                <div className="btn-container">
                                    <button type="button" className="btn btn-dark px-4 my-2 my-md-5">
                                        <span className="mr-2">download</span>
                                        <span>
                                            <img className="btn-icon" alt="Kielo brochure" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg==" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="ol-md-12 col-lg-6 brochure-image">
                                {image}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Brochure;

