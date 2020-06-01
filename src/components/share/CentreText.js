import React from 'react';
import '../../assets/styles/CentreText.css';

const CentreText = (props) => {
  return (
    <div className="container">
        <div className='row'>
            <div className='centre-text col-12 col-md-10 col-lg-8 mx-auto'>
                <p className='centre-text-title font-weight-bold text-center mb-2 mb-md-4'>{props.title}</p>
                <p className='text-center'>{props.text}</p>
            </div>
        </div>
    </div>
  );
}

export default CentreText;

