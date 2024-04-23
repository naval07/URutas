import Card from '../card/Card';
import React, {useState} from "react";
import catalogo from './catalogo.json';
import CardSearch from '../cardSearch/CardSearch';
import './Catalogo.css';


function Catalogo(){
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
        <div class = "catalogo">
            {catalogo.map((item) =>(
                    <CardSearch
                    key = {item.index}
                    title = {item.Título}
                    area = {item.area}
                    descripcion={item.proposito}
                    onClick={handleClick}
                    />
                ))}
                

                {mostrarModal && (
      <div className="modal">
        <div className="modal-content">
            <h4>Descripción del curso</h4>
        <p>{modalDescription}</p>
        <button onClick={()=>setMostrarModal(false)}>Cerrar</button>
            </div>
      </div>
    )}
            

        </div>
    )
}

export default Catalogo;


