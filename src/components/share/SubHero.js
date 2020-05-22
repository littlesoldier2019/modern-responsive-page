import React from 'react';
import '../../assets/styles/SubHero.css';
import cover1 from '../../assets/image/cover2.jpg';

const SubHero = () => {
  return (
    <div className="card subhero-container mx-5">
        <img className="card-img" src={cover1} alt="Kielo Consultancy"/>   
        <div className="subhero row">
            <div className="col bg-white d-flex justify-content-center align-items-center content item1">
                <div >
                    <h1>Products</h1>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default SubHero;