import React from 'react';
import '../../assets/styles/Button.css';

const Button = (props) => {
  return (
    <div className="btn-container d-flex justify-content-xs-start justify-content-md-end mt-3 mt-md-5">
        <button type={props.type} className="btn btn-dark px-4 px-md-4 py-2">
            <span className="mr-2">{props.text}</span>
            <span>
                <img className="btn-icon" alt='Kielo Consultancy' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAbUlEQVQ4jeWSsQmAQBAE50VTO7ENwUww0QaN/IrEAqzBYA38h8/U00BwooODgb09+A+SKkn5E8EsaZJUWAWLDnwqcWHZAfWJowfKMHtgcM5t0b7qPiNAZsqTECO0QGOOcIXkiLYm3qjx2SN9lx19bYG9khhYAgAAAABJRU5ErkJggg=="/>
            </span>
        </button>
    </div>
  );
}

export default Button;

