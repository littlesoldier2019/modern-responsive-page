import React from 'react';
import '../../assets/styles/Spinner.css';

const Spinner = () => {
    return ( 
        <div className='spinner-container'>
            <div className = "lds-heart" >
                <div ></div> 
            </div>
        </div>
    );
}

export default Spinner;