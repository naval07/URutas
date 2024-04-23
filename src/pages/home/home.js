import React from "react";
import Header from '../../components/header/header';
import Subheader from "../../components/subheader/Subheader";
import Catalogo from '../../components/catalogo/Catalogo';

import './home.css';

import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <Header />
            <div class = "content">
                <Subheader title="Rutas de aprendizaje" />
            <div class="expl">
                <h2>
                    ¿Qué habilidades quieres adquirir? Te mostramos tu ruta de aprendizaje
                </h2>

                <br/><br/><br/>
                <p>
                En URutas puedes encontrar las mejores rutas de aprendizaje que la Universidad del Rosario tiene para ofrecer, combinando diferentes disciplinas y áreas temáticas.
                <br/>

                El algoritmo de generación de rutas hace uso de tecnologías emergentes y vanguardistas para determinar el mejor camino para desarrollar una nueva habilidad. Esto se logra al relacionar cursos diversos y disruptivos, que buscan formar en conocimientos específicos.
                <br/>

                El modelo de URutas está diseñado para generar rutas acordes a cualquier habilidad que se desee, incluyendo aquellas ampliamente recomendadas por la vanguardia de la industria; como el Foro Económico Mundial.
                </p>

                <div class="boton" >
                    <Link to='/search'>
                        Haz tu ruta de aprendizaje aquí
                    </Link>
                </div>
            </div>
            <div className="cat">
                <h2>Lista de cursos</h2>

                <Catalogo />

            </div>

            

            
            
        </div>


            
        </div>

    )
    
}

export default Home;