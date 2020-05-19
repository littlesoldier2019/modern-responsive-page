import React from 'react';
import image from '../../assets/image/section-left.jpg'

const SectionLeft = () => {
  return (
    <div className='container'>
        <div class="row">
            <div class="col-sm-12 col-md-6 d-flex justify-content-center align-items-center p-5 section section-item">
                <div>
                    <h2 class="mb-5 px-5">Stalen deuren op maat</h2>
                    <p className='mb-5 px-5'>Bij Groener Stalen Interieur worden alle stalen deuren altijd naar uw wensen ontworpen en geproduceerd. Door het gebruik van staal zijn veel stijlvolle, stoere en strakke ontwerpen mogelijk.</p>
                    <p className='mb-5 px-5'>Daarnaast leveren wij een aantal verschillende typen deuren: taats-, schuif- en scharnierdeuren. Daarnaast produceren wij stalen raamkozijnen welke het plaatje compleet maken.</p>
                    <div className="btn-container px-5">
                        <button type="button" className="btn btn-dark px-4 py-2">
                            <a href="#" className="" >
                                <span className="mr-2">lees over onze deuren</span>
                                <span>
                                <img className="btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg=="/>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center py-5 section section-item">
                <img src={image} alt='Kielo Consultancy'/>
            </div>
        </div>
    </div>
  );
}

export default SectionLeft;