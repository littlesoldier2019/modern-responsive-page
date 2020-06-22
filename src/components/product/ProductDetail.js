import React, { useContext } from 'react';
import { exportRawText } from '../../helpers/exportRawText';
import { ProductContext } from '../../contexts/ProductContext';
import '../../assets/styles/ProductDetail.css'
import Button from '../share/Button';


const ProductDetail = () => {
    const { products, error } = useContext(ProductContext);
    let errorMessage;
    let name;
    let description;
    let formattedContent;
    let spec;
    let picture;
    if (!products || products.length === 0 || error) {
        return errorMessage = <div>"Please refresh the page"</div>
    } else {
        name = products[0].fields.name;
        description = products[0].fields.description;
        const { specification, image } = products[0].fields;
        formattedContent = exportRawText(products[0]);
        spec = specification.map((item, index) => { return <li className="list-group-item bg-light" key={index}>{item}</li> });
        picture = image.map((item, index) => {
            return (
                <div className="col-md-12 col-lg-6 p-2 d-flex align-items-center justify-content-center" key={index}>
                    <img src={item.fields.file.url} alt='Kielo face mask' />
                </div>
            )
        });
    }

    return (
        <>
            {(errorMessage) ? { errorMessage } : (
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 py-5 d-flex align-items-start product-container product-item1">
                            <div>
                                <h2 className="my-5 px-0 px-lg-5">{name}</h2>
                                <p className='px-0 px-lg-5 mb-2 mb-lg-5 font-weight-bold'>{description}</p>
                                <pre className="blog_pre mb-2 mb-lg-5 pb-2 px-0 px-lg-5 ">
                                    <code>{formattedContent}</code>
                                </pre>
                                <Button text='Get quotation' type='button' />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 p-3 p-lg-5 d-flex align-items-start justify-content-center product-container product-item2 bg-light p">
                            <div>
                                <h2 className="my-5">specification</h2>
                                <div className="row">
                                    <div className="col">
                                        <div >
                                            <ul className="list-group list-group-flush">{spec}</ul>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="my-5">pictures</h2>
                                <div className="row d-flex flex-wrap justify-content-center product-picture">
                                    {picture}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetail;