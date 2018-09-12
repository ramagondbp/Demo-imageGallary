import React from 'react';
import logo from '../../../../src/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => (  
    <div className="header-wrap">
        <header className="App-header">
            <ul>
                <li><Link to={'/'}>Animals</Link></li>
                <li><Link to={'/fruitveg'}>Fruit & Veg</Link></li>
            </ul>
            <div className="logo-wrap"><img src={logo} className="App-logo" alt="logo" /></div>
        </header>       
    </div>
);