import cursos from "../../cursos.json";
import React from "react";


export default function Cursos() {

    return (

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

    )

}