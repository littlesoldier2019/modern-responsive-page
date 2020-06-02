import React from 'react';
// import '../../assets/styles/Space.css';

const Space = (props) => {
  return (
    <div 
        className="space-container py-0 py-md-2 py-lg-5 my-0 my-md-2 my-lg-5 d-none d-sm-block">  
        <div style={{height: `${props.height}`}}> </div>
    </div>
  );
}

export default Space;