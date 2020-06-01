import React from 'react';
import '../../assets/styles/MiddleLine.css';

const MiddleLine = () => {
  return (
    <div className='position-relative middle-line-container p-2 m-2 p-md-2 m-md-5'>
        <div className='position-absolute middle-line'></div>
    </div>
  );
}

export default MiddleLine;