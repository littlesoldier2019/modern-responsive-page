import React from 'react';
import image from '../../assets/image/section-left.jpg'

const SectionLeft = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center my-5 section section-item">
                <div>
                    <h2 className="mb-5 px-xs-2 px-md-5">find the outcome for manufactures</h2>
                    <p className='mb-5 px-xs-2 px-md-5'>Born in a very hard time in matching demands in EU and supplying capacities in Vietnam . We know many factories, they face to difficult when there is a crisis time in the country. Bolck down everywhere, but workers can not end their need of rice. 
                        . They still there, productionline with pospone order. Workers still there with a huge panic and worries with no job plan available. 
                        In the same time, There is a crisis time too in EU while people need suppliers but it is too far to verify a supplier in Vietnam. 
                        Our team, in supporting factories there to transform their industry, try to continue the prodution. Where as the boss want to keep job for their worker, they sourcing new machine. 
                        They study new technic, then transform the prodution to try to go through the difficulites. Their workers are behind pushing them, and us to forward. 

                    </p>
                    <p className='mb-5 px-xs-2 px-md-5'>Factories we chosen here is one qualified FDA (for US), CE for EU. And have official export liciense for the sold items. 
                        We know what is going on, we know that our control to the situation is too least. We know that we need a Shishu spirit of Finland. 
                        We know a matching service is needed than ever before
                        The Vietnamese with background in QC, in production management. We take in charge veify factory, takecare legistration related stuffs
                        We connect a good logistic supplier to take part in the circle
                        We here listening to your requirement for a qualified and virified container arrived in your place here in EU. 
                    </p>
                    <div className="btn-container px-xs-2 px-md-5">
                        <button type="button" className="btn btn-dark px-4 py-2">
                            <span className="mr-2">become our suppliers</span>
                            <span>
                                <img className="btn-icon" alt='Kielo Consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg=="/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center py-5 section section-item">
                <img className='py-5' src={image} alt='Kielo Consultancy'/>
            </div>
        </div>
    </div>
  );
}

export default SectionLeft;