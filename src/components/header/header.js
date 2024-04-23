import React from 'react';
import './header.css';
import LogoUR from './thumbnail_UROSARIO_Logo_Horizontal_nuevocolor.png';
import iconBuscar from './icon_busqueda.svg';

import {Link} from "react-router-dom";

function Header(){
    return(
        /*caracteristicas del componente*/
        <header>
            <div className = "logoUR">
                <img src={LogoUR} alt=''></img>
            </div>
            <div className = "nav">
                <Link to='/'>
                    Inicio
                </Link>
                <Link to='/search'>
                    Búsqueda por aptitud
                </Link>
                <Link to='/advancedSearch'>
                    Búsqueda específica
            </Link>
            </div>
            <div className="search">
            <input type="text" id="searchInput" placeholder="Buscar..."/>
            <button id="searchButton"><img src={iconBuscar}/></button>
        </div>
        </header>
    )
}

export default Header;