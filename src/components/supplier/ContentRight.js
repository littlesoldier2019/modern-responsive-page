import React from 'react';

const ContentRight = (props) => {
    return (
        <div className="container my-3 my-md-5">
            <div className="row flex-lg-row-reverse">
                <div className="col-sm-6 my-2 my-md-4">
                    <img className='' src={props.image} alt='Kielo Consultancy' />
                </div>
                <div className="col-sm-6 p-2 p-md-5 d-flex flex-column justify-content-center">
                    <h2 className="mb-2 mb-md-4">{props.title}</h2>
                    <p className='mb-2 mb-md-4'>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentRight;