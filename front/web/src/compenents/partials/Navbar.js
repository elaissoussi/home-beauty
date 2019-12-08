import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
function Navbar() {
    return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">HomeBeauty</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1
                    <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Page 1-1</a></li>
                    </ul>
                </li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Inscrie </a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Connexion</a></li>
                </ul>
            </div>
            </nav> 






    )
}

export default Navbar
