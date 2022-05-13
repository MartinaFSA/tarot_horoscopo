import React, { useState, useEffect } from "react";
import horoscopoJson from "../Data/horoscopo.json";

export default function Horoscopo({nombre, genero, fechaNacimiento, email, signo} ) {
  const [suerte, setSuerte] = useState("");
  const [amor, setAmor] = useState("");
  const [salud, setSalud] = useState("");
  const [dinero, setDinero] = useState("");
  const [personalidad, setPersonalidad] = useState("");

  const resultadosHoroscopo = () => {
    setTimeout(() => {
    getDinero();
    getSalud();
    getAmor();
    getSuerte();
    document.getElementById('resultados').style.display = "block"}, 2000);
  };
    /*
    useEffect(() => {
      fetch("https://api.github.com/users/Livedetermined")
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            setAvatarURL(result.avatar_url);
            setGitHubUsername(result.login);
          },
          (error) => {
            console.log(error);
          }
        );
    }, []);
    */
  function getDinero(){
    let jsonSigno = horoscopoJson.filter(function(item) {return item.signo == signo});
    setDinero(jsonSigno[0].dinero);
  }
  function getSalud(){
    let jsonSigno = horoscopoJson.filter(function(item) {return item.signo == signo});
    setSalud(jsonSigno[0].salud);
  }
  function getAmor(){
    let jsonSigno = horoscopoJson.filter(function(item) {return item.signo == signo});
    setAmor(jsonSigno[0].amor);
  }
  function getSuerte(){
    let jsonSigno = horoscopoJson.filter(function(item) {return item.signo == signo});
    setSuerte(jsonSigno[0].suerte);
  }

  return (
    <div className="container">
      <section>
        <button onClick={resultadosHoroscopo}>Ver ahora</button>
      </section>
      <main id="resultados">
        <article>
          <img src="/img/horoscopo.jpg" alt="cartas de arcanos apoyadas sobre una mesa"></img>
          <div>
            <p className="textoImportante">Ya generamos tu pronóstico para este mes!</p>
            <p> {nombre}, los astros dicen que este mes te deparará cosas muy especiales...</p>
          </div>
        </article>

        <article>
          <section>
            <p className="textoImportante">Datos user</p>
            <p>{email}, {genero}, {fechaNacimiento}</p>
          </section>
          <section>
            <p className="textoImportante">Tu signo solar es {signo}</p>
            <p>Este signo es conocido por ser </p>
          </section>
          <section>
            <p className="textoImportante">Amor</p>
            <p>{amor}</p>
          </section>
          <section>
            <p className="textoImportante">Salud</p>
            <p>{salud}</p>
          </section>
          <section>
            <p className="textoImportante">Dinero</p>
            <p>{dinero}</p>
          </section>
          <section>
            <p className="textoImportante">Suerte</p>
            <p>{suerte}</p>
          </section>
        </article>
        <article>
          <section>
            <p className="encabezado">Tu número de la suerte es el {}</p>
          </section>
        </article>
        <article id="tiradaCartas">
          <section>
            <img src="/img/hand.jpg" alt="ilustración de una mano con un ojo entreabierto en el centro"></img>
            <p className="encabezado">¿Querés realizar una lectura de cartas?</p>
            <button className="btn btn-primary" >Sí, realizar lectura</button>
          </section>
          <section>
            <div>
              <p className="encabezado">Resultados</p>
              <p>La información del significado de las cartas deberá estar contenido en un archivo .json con el nombre de la carta, descripción al derecho, descripción al revés, imagen derecha
              imagen al revés. La tirada de cartas informará el pasado, el presente y el futuro. La misma deberá estar manejada por una promesa que traerá la información al hacer un
              click desde el servidor externo la información. y las cartas deben ser mostradas luego de una espera indicando que se está procesando la
              información.</p>
            </div>

            <div>
              <div>
                <img></img>
                <p className="textoImportante">Pasado</p>
              </div>

              <div>
                <img></img>
                <p className="textoImportante">Presente</p>
              </div>

              <div>
                <img></img>
                <p className="textoImportante">Futuro</p>
              </div>
            </div>

            <div>
              <div>
                <p className="textoImportante">Pasado</p>
                <p>blabla</p>
              </div>
              <div>
                <p className="textoImportante">Presente</p>
                <p>blabla</p>
              </div>
              <div>
                <p className="textoImportante">Futuro</p>
                <p>blabla</p>
              </div>              
            </div>
          </section>
        </article>
        <button className="btn btn-primary">Descargar resultados</button>
      </main>
    </div>
  );
}
