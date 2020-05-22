import React from 'react';
import '../../assets/styles/Header.css';
import Logo from '../../assets/image/KieloConsultancy.JPG';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mx-5">
        <a className="navbar-brand" href="#">
            <img src={Logo} width="100%" height="100%" alt="favicon" loading="lazy"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active px-3">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item px-3">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item px-3 quotation-btn">
                    <a className="nav-link" id='quotation-link' href="#">GET QUOTATION</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;