import React from 'react';
// import '../../assets/styles/Space.css';

const Space = (props) => {
  return (
    <div 
        className="space-container py-0 py-md-3 py-lg-5 my-0 my-md-3 my-lg-5 d-none d-sm-block" 
        style={{height: `${props.height}`}}>  
    </div>
  );
}

export default Space;