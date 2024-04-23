import React, {useState} from "react";
import Header from '../../components/header/header';
import Subheader from "../../components/subheader/Subheader";
import Catalogo from '../../components/catalogo/Catalogo';
import Searchbar from "../../components/searchBar/searchbar";
import './search.css';
import catalogo from "../../components/catalogo/Catalogo";

import cursos from "../../cursos.json";
import CardSearch from "../../components/cardSearch/CardSearch";
function Search(){

    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('')

    const [mostrarCursos, setMostrarCursos] = useState(false)
    const handleGetJson = async () => {
        console.log(`Sending prompt: ${prompt}`);
        const response = await fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt}),
        });

        const apiResult = await response.json(); // Use a different name for the result
        console.log("Success:", apiResult);
        setResult(apiResult.result);
        setMostrarCursos(true)
    }

    const [modalDescription, setModalDescription] = useState(''); 
  const [mostrarModal, setMostrarModal] = useState(false);
    const abrirModal = (description) => {
        setModalDescription(description);
        console.log('mostrando modal');
        
        setMostrarModal(true);
      };
      
      const cerrarModal = () => {
        setMostrarModal(false);
      };
      const handleClick = (descripcion) => {
        console.log('abriendo modaaal');
        setModalDescription(descripcion);
        setMostrarModal(true);
      }
    
   


    return(
        <div>
            <Header/>
            <div className="content">
            <Subheader title="Búsqueda por aptitud"/>

            <div className="searchbar">
                <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escriba la habilidad que quiera aprender :)"/>
                <button onClick={handleGetJson}>Buscar</button>
            </div>

            <div className="cursosLista">
                {cursos.map(item =>(
                    <CardSearch
                    key = {item.id}
                    title = {item.titulo}
                    area = {item.area}
                    descripcion={item.descripcion}
                    onClick={handleClick}/>
                ))}
                {mostrarModal && (
      <div className="modal">
        <div className="modal-content">
            <h4>Descripción del curso</h4>
        <p>{modalDescription}</p>
        <button onClick={()=>setMostrarModal(false)}>Cerrar </button>
            </div>
      </div>
    )}
            </div>
            
  

            

                        </div>


        </div>

    )

}

export default Search;
