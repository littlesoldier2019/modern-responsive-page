import React from 'react';
import '../../assets/styles/SubHero.css';

const SubHero = (props) => {
  return (
    <div className="subhero-container">  
        <div className="subhero row d-flex justify-content-end align-items-end">
            <div className="col-sm-6 d-flex bg-light justify-content-center align-items-center item1">
                <h1 className='p-4 p-md-5'>{props.title}</h1>
            </div>
        </div>
    </div>
  );
}

export default SubHero;