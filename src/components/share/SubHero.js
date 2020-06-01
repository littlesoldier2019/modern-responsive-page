import React from 'react';
import '../../assets/styles/SubHero.css';

const SubHero = (props) => {
  return (
    <div className="subhero-container">  
        <div className="subhero row d-flex justify-content-end align-items-end">
            <div className="col-12 col-md-6 bg-light d-flex justify-content-center align-items-center item1">
                <h1>{props.title}</h1>
            </div>
        </div>
    </div>
  );
}

export default SubHero;