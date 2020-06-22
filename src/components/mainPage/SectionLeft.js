import React from 'react';
import { Link } from "react-router-dom";
import image from '../../assets/image/section-left.jpg';
import Routes from "../../helpers/route";

const SectionLeft = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center my-3 my-md-5 section section-item">
                    <div className='px-2 px-md-5'>
                        <h2 className="mb-2 mb-md-5">SEEKING MARKETS FOR MANUFACTURERS</h2>
                        <p className='mb-2 mb-md-5'>Kielo is born in and by a time of crisis when the COVID-19 pandemic is causing stagnation in most trading activities. Many manufacturers are hit by a slump when borders are closed and trade paralyzed. Enterprises are facing difficulties in maintaining their operations, and the common coping strategy is to cease all activities and minimize costs. Most employees are furloughed due to the hault in exportation. But life still goes on. Workers still need to put food on the table, and worries about an unforseeable future increase day after day. Meanwhile, in Europe and the United States, Vietnam's primary markets for exportation, demands are still growing. However, demands for traditional exported goods such as furniture and agricultural products are now replaced by demands for medical supplies and personal protective equipments (PPEs). Yet the geographical distance and the exceptional circumstances caused by the pandemic have posed significant obstacles in finding suppliers and assessing the products' quality before purchasing.</p>
                        <p className='mb-2 mb-md-5'>Answering the situation's call for solutions, Kielo is born with the mission to connect manufacturers who are adjusting to new lines of products and clients in Europe and the United States who are seeking trusted suppliers. The market's emerging demands and the workers' hope for a better life are what motivate us to move forward. All of our partners are qualified to produce for exportations, complying with the FDA (for the United States' market) and CE (for the European Union's market) and all the required exportation permits for the goods offered to our clients.
                        We at Kielo understand the current obstacles and coming challenges. It is during this time that the spirit of sisu is needed more than ever as we steer the boats through the storm. Networking needs to be strengthened among Vietnamese enterprises who have thus far been focusing on production and quality assurance. Not only do we at Kielo help manufacturers connect with potential markets but also acts as a client ourselves. We support our clients in screening suppliers and carrying out administrative and custom procedures. We also offfer consultancy on logistic solutions and custom matters. We do our best to ensure quality check before the goods arrive at the habours.</p>
                        <div className="btn-container">
                            <Link to={Routes.suppliers}>
                                <button type="button" className="btn btn-dark px-4 py-2">
                                    <span className="mr-2">become our suppliers</span>
                                    <span>
                                        <img className="btn-icon" alt='Kielo Consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg==" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center py-3 py-md-5 my-3 my-md-5 section section-item">
                    <img className='py-2 py-md-5' src={image} alt='Kielo Consultancy' />
                </div>
            </div>
        </div>
    );
}

export default SectionLeft;