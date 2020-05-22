import React from 'react';
import '../../assets/styles/Slogan.css';

const Slogan = (props) => {
  return (
    <div className="container my-5 slogan">
        <div className="row justify-content-center">
            <div className="col-8">
              <h4 className="text-center">{props.text}</h4>
            </div>
        </div>
    </div>
  );
}

export default Slogan;