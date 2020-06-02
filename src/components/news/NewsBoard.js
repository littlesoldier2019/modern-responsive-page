import React from 'react';
import image from '../../assets/image/1.jpg';

const card = (
    <div className="col-sm-12 col-md-6 col-lg-4 text-left mb-3 mb-md-5">
        <img src={image} className="img-fluid" alt="Finnish custom policies" />
        <p className='text-uppercase my-2 my-md-4 font-weight-bold'>Een stalen scharnierdeur geeft direct een nieuwe</p>
        <p>Een stalen scharnierdeur geeft direct een nieuwe uitstraling aan uw woonkamer, winkel, loft of kantoor. Wij gebruiken slanke handgrepen met een rolsluiting of extra smalle deurklink-systemen voor een mooie en minimale afwerking</p>
    </div>
)

const News = () => {
    return (
        <div className="container">
            <div className="row">
                {card}
                {card}
                {card}
                {card}
                {card}
                {card}
            </div>
        </div>
    );
}

export default News;

