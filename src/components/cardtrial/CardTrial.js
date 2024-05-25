import React, { useState } from "react";
import "./CardTrial.css";

function CardTrial({ title, area, descripcion, rutaImg }) {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(!expanded);
  }

  return (
    <div className={`card ${expanded ? "expand" : ""}`} onClick={expand}>
      <div
        className="card-image"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL + rutaImg}")`,
        }}
      ></div>
      <div className="title">
        <h3>{title}</h3>
        <div>Área: {area}</div>
      </div>
      <p> Descripcion: {descripcion}</p>
    </div>
  );
}

export default CardTrial;
