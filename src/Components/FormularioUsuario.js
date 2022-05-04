import React, { useState } from "react";

function FormularioUsuario(params) {
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");

  const getNombre = (e) => {
    setNombre(e.target.value);
  };
  const getGenero = (e) => {
    setGenero(e.target.value);
  };
  const getFechaNacimiento = (e) => {
    setFechaNacimiento(new Date(e.target.value));
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(nombre, genero, fechaNacimiento, email);
  };

  return (
    <div className="container">
      <h1>Luna Mágica Servicio de Astrología y Adivinaciones varias</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo
      </p>
      <form className="forn-group" onSubmit={enviarFormulario}>
        <div className="mb-5">
          <label className="form-label">Nombre Completo</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            onChange={getNombre}
          />
        </div>
        <label className="form-label">Género</label>
        <input
          onChange={getGenero}
          className="form-control"
          list="genero"
          id="generoLista"
          placeholder="Elija su género..."
        ></input>
        <div className="mb-3">
          <datalist id="genero">
            <option value="Femenino" />
            <option value="Masculino" />
            <option value="Otro" />
          </datalist>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={getEmail}
            type="email"
            className="form-control"
            id="email"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su email.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha Nacimiento</label>
          <input
            onChange={getFechaNacimiento}
            type="date"
            min="1910-01-01"
            max="2010-12-31"
            className="form-control"
            id="fechaNacimiento"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Generar la Magia
        </button>
      </form>
    </div>
  );
}

export default FormularioUsuario;
