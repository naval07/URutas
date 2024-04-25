import React from "react";
import "./header.css";
import LogoUR from "./thumbnail_UROSARIO_Logo_Horizontal_nuevocolor.png";
import iconBuscar from "./icon_busqueda.svg";

import { Link } from "react-router-dom";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // npm install react-icons

function Header() {
  // Referencia del navbar
  const navRef = useRef();

  // Funcion para el menú desplegable
  const mostrarMenu = () => {
    navRef.current.classList.toggle("navbar-burger");
  };

  return (
    /*caracteristicas del componente*/
    <header>
      <div className="logoUR">
        <Link to="/">
          <img src={LogoUR} alt=""></img>
        </Link>
      </div>
      {/* Definir la referencia en la navbar */}
      <div className="nav" ref={navRef}>
        <div className="nav-element" id="nav-elem-inicio">
          <Link to="/">Inicio</Link>
        </div>
        <div className="nav-element" id="nav-elem-aptitud">
          <Link to="/search">Búsqueda por aptitud</Link>
        </div>
        <div className="nav-element" id="nav-elem-especifica">
          <Link to="/advancedSearch">Búsqueda específica</Link>
        </div>
        <button class="nav-btn nav-close-btn" onClick={mostrarMenu}>
          <FaTimes />
        </button>
      </div>
      <button class="nav-btn" onClick={mostrarMenu}>
        <FaBars />
      </button>
      {/* <div className="search">
        <input
          type="text"
          id="searchInput"
          placeholder="Buscar..."
          ref={inputRef}
        />
        <button id="searchButton">
          <img src={iconBuscar} />
        </button>
      </div> */}
    </header>
  );
}

export default Header;
