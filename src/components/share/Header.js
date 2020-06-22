import React from 'react';
import { NavLink } from "react-router-dom";
import Routes from '../../helpers/route';
import '../../assets/styles/Header.css';
import Logo from '../../assets/image/KieloConsultancy.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mx-md-5">
        <div className='navbar-brand'>
            <img src={Logo} width="100%" height="100%" alt="favicon" loading="lazy"/>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item px-3">
                    <NavLink to={Routes.home} className='nav-link'>Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink to={Routes.products} className='nav-link'>Products</NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink to={Routes.news} className='nav-link'>News</NavLink>
                </li>
                <li className="nav-item px-3">
                    <NavLink to={Routes.suppliers} className='nav-link'>Suppliers</NavLink>
                </li>
                <li className="nav-item px-3 quotation-btn">
                    <NavLink to={Routes.quotation} className='nav-link' id='quotation-link'>GET QUOTATION</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Header;