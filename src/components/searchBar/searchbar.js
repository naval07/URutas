import React, {useEffect,useState} from "react";
import "./search.css"
import cursos from "../../cursos.json";

const Searchbar = () =>{
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


    return (
        <form >
            <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escriba la habilidad que quiera aprender :)"/>
            <button onClick={handleGetJson}>Buscar</button>
            {mostrarCursos && (
                <div className="container mt-4" align="center">

                    <h4>Lista de Cursos</h4>

                    <div className="row">

                        <div className="col-md-12">

                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Área temática</th>
                                </tr>
                                </thead>
                                <tbody>

                                {cursos.map(item => (

                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.titulo}</td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.area}</td>
                                    </tr>

                                ))}

                                </tbody>

                            </table>

                        </div>

                    </div>


                </div>
            )}
        </form >
    );
}

export default Searchbar;