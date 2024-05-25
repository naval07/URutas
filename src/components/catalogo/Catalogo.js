import Card from '../card/Card';
import React, {useState} from "react";
import catalogo from './catalogo.json';
import CardSearch from '../cardSearch/CardSearch';
import CardTrial from '../cardtrial/CardTrial';
import './Catalogo.css';
import '../../pages/search/search.css';


function Catalogo(){
    const [modalDescription, setModalDescription] = useState(''); 
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = (description) => {
        setModalDescription(description);
        console.log('mostrando modal');
        console.log('Modal opened with description:', description);
        setMostrarModal(true);
        console.log('modal',mostrarModal);
      };
      
      const cerrarModal = () => {
        setMostrarModal(false);
      };

      const handleClick = (descripcion) => {
        console.log('abriendo modaaal');
        console.log('Modal opened with description:', descripcion);
        setModalDescription(descripcion);
        setMostrarModal(true);
        console.log('modal',mostrarModal);
      }
    
    
    return(
        <div class = "cursosLista1-grid">
            {catalogo.map(
              (item) =>(<CardTrial
                  key = {item.index}
                  title = {item.Título}
                  area = {item.area}
                  descripcion={item.proposito}
                  rutaImg={item.rutaImg}
                  />
                )
              )
            }
            {mostrarModal && (
                <div className="modal">
                  <div className="modal-content">
                    <h4>Descripción del curso</h4>
                    <p>{modalDescription}</p>
                    <button onClick={()=>{console.log('Modal cerrado');setMostrarModal(false)}}>Cerrar</button>
                  </div>
                </div>
            )}
    
        </div>
    )
}

export default Catalogo;


