import React, { useState } from "react";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const Validar = (event) => {
      event.preventDefault()
      console.log('Pulsado el botón')
      if (!nombre.trim()) {
          console.log('El campo nombre está vacío')
          return
      }
      if (!edad.trim()) {
        console.log('El campo edad está vacío')
        return
    }
  }

  return (
    <div className="container">
      <form onSubmit={Validar} className="form-group">
        <div className="d-grid gap-2 col-6 mx-auto">
          <input
            placeholder="introduce el nombre"
            className="form-control mb-3"
            type="text"
            onChange={(e) => {setNombre(e.target.value)}}
          />
          <input
            placeholder="introduce la edad"
            className="form-control mb-3"
            type="text"
            onChange={(e) => {setEdad(e.target.value)}}
          />
          <input className="btn btn-info mb-3" type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
