import React from 'react';
import './App.css';
import {useState} from "react";
import Header from "./components/header/header"
import Subheader from "./components/subheader/Subheader";
import Catalogo from './components/catalogo/Catalogo';
import Searchbar from "./components/searchBar/searchbar";


import catalogo from "./components/catalogo/Catalogo";
import Selection from "./components/checklist/Selection"

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import cursos from "./cursos.json";

import Home from './pages/home/home';
import Search from './pages/search/search';
import AdvancedSearch from './pages/advancedSearch/AdvancedSearch';

function App() {

    return (
        <div className="container-fluid overflow-hidden">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/advancedSearch' element={<AdvancedSearch/>}/>
                </Routes>
            </BrowserRouter> 
            

        </div>
    );
}

export default App;
