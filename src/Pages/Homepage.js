import React from "react";

function Homepage() {
  return (
    <div className="container">
      <h1>Luna Mágica Servicio de Astrología y Adivinaciones varias</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo
      </p>
      <form>
        <div className="mb-5">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input type="number" className="form-control" id="edad" />
        </div>
        <label class="form-label">Género</label>
        <input
          class="form-control"
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
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su email.
          </div>
        </div>
        <div className="mb-3">
            <label className="form-label">Fecha Nacimiento</label>
            <input
                type="date"
                min="1910-01-01" max="2010-12-31"
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

export default Homepage;
