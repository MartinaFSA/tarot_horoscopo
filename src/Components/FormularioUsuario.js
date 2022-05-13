import React, { useState} from "react";
import Horoscopo from "./Horoscopo";
import BtnShowhoroscopo from './btn-showhoroscopo.js'
import horoscopoJson from "../Data/horoscopo.json";
import '../Styles/form-horoscopo.css'

export default function FormularioUsuario() {
  const [nombre, setNombre] = useState("Nombre");
  const [genero, setGenero] = useState("unselected");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("example@mail.com");
  const [signo, setSigno] = useState("");
  const [showHoroscopo, setHoroscopo] = useState('cargar')

  const getNombre = (e) => {
    setNombre(e.target.value);
  };
  const getGenero = (e) => {
    setGenero(e.target.value);
  };
  const getFechaNacimiento = (e) => {
    setFechaNacimiento(e.target.value);
    getSigno()
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  function getSigno() {
    console.log('separador');

    const fecha = new Date(fechaNacimiento);
    const diaUser = fecha.getDate();
    const mesUser = fecha.getMonth() + 1;
    console.log('user nació en ' + diaUser + ' ' + mesUser);
    const signoPersona = [];

    horoscopoJson.map(horoscopo => {
      const signoInicia = horoscopo.periodo[0].split("/");
      const mesInicio = signoInicia[1];
      const diaInicio = signoInicia[0];
      const signoTermina = horoscopo.periodo[1].split("/");
      const mesTermina = signoTermina[1];
      const diaTermina = signoTermina[0];
    
      if (diaInicio <= diaUser && diaTermina >= diaUser && (mesInicio == mesUser) || (mesTermina == mesUser) ) {
        signoPersona.push(horoscopo.signo);
      }
      
    });
    const signoPersonaString = signoPersona.toString();

    console.log('Tu signo solar es: ' + signoPersonaString);
    setSigno(signoPersonaString);
  };

  return (
    <div className="container" id="formUsuario">
      <section className="encabezado">
        <p>Tomá decisiones en base a lo que los astros te tienen preparado</p>
      </section>
      
      <section>
        <p className="textoImportante">Contanos algunas cosas sobre vos para que podamos consultar tu destino astrológico en los campos del amor, el dinero, la salud y la suerte.</p>
        <form className="forn-group">
          <div className="mb-3">
            <label className="form-label">Nombre o apodo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              onChange={getNombre}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Género</label>
            <select class="form-control" onChange={getGenero} required>
              <option selected disabled hidden>Seleccione su género</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="No binario">No binario</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha Nacimiento</label>
            <input
              onChange={getFechaNacimiento}
              type="date"
              min="1910-01-01"
              max="2020-12-31"
              className="form-control"
              id="fechaNacimiento"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={getEmail}
              type="email"
              className="form-control"
              id="email"
              required
            />
            <div id="emailHelp" className="mini-text">
              Luego de realizar la lectura le compartiremos los resultados en esta dirección de mail.
            </div>
          </div>
          {showHoroscopo === 'cargar' && (
            <BtnShowhoroscopo mostrarHoroscopo={() => setHoroscopo('mostrar-horoscopo') } />
          )}
        </form>
      </section>
      
      
      {showHoroscopo === 'mostrar-horoscopo' && 
        <Horoscopo nombre={nombre} genero={genero} fechaNacimiento={fechaNacimiento} email={email} signo={signo}></Horoscopo>
      }
    </div>
  );
}