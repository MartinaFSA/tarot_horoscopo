import React, { useState, useEffect } from "react";
import horoscopoJson from "../Data/horoscopo.json";
import html2canvas from 'html2canvas';

export default function Horoscopo({nombre, genero, fechaNacimiento, email, signo} ) {
  const [suerte, setSuerte] = useState("");
  const [amor, setAmor] = useState("");
  const [salud, setSalud] = useState("");
  const [dinero, setDinero] = useState("");
  const [numSuerte, setnumSuerte] = useState("");
  const [personalidad, setPersonalidad] = useState("");
  
  const resultadosHoroscopo = () => {
    document.getElementById('resultados').style.display = "block";
    setTimeout(() => {
    document.getElementById('overlay').style.display = "none";
    }, 500);
  
    getnumSuerte();
    getPersonalidad();
    getDinero();
    getSalud();
    getAmor();
    getSuerte();

    getTiradaUno();
    getTiradaDos()
    getTiradaTres()
  };
    
  function getnumSuerte(){
    const fecha = new Date(fechaNacimiento);
    const diaUser = fecha.getDate();
    const mesUser = fecha.getMonth() + 1;
    let anioUser = fecha.getFullYear();
    anioUser = anioUser.toString();
    const digitosAnio = anioUser.split("");
    let anioDigitoUno = digitosAnio[0];
    let anioDigitoDos = digitosAnio[1];
    let anioDigitoTres = digitosAnio[2];
    let anioDigitoCuatro = digitosAnio[3];
    anioDigitoUno = parseInt(anioDigitoUno);
    anioDigitoDos = parseInt(anioDigitoDos);
    anioDigitoTres = parseInt(anioDigitoTres);
    anioDigitoCuatro = parseInt(anioDigitoCuatro);
    setnumSuerte(diaUser+mesUser+ anioDigitoUno + anioDigitoDos + anioDigitoTres +  anioDigitoCuatro);
  }
  
  function getPersonalidad(){
    let jsonSigno = horoscopoJson.filter(function(item) {return item.signo == signo});
    if(genero == 'Femenino') {
      setPersonalidad(jsonSigno[0].personalidadFemenino);
    } else if(genero == 'Masculino') {
      setPersonalidad(jsonSigno[0].personalidadMasculino);
    } else {
      setPersonalidad(jsonSigno[0].personalidadNoBinario);
    }
  }
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
  
  const [cartas, setCartas] = useState([]);
  const [primeraCartaNombre, setCartaUnoName] = useState('');
  const [primeraCartaDescripcion, setCartaUnoDesc] = useState('');
  const [primeraCartaPosicion, setCartaUnoPos] = useState('');

  const [segundaCartaNombre, setCartaDosName] = useState('');
  const [segundaCartaDescripcion, setCartaDosDesc] = useState('');
  const [segundaCartaPosicion, setCartaDosPos] = useState('');

  const [terceraCartaNombre, setCartaTresName] = useState('');
  const [terceraCartaDescripcion, setCartaTresDesc] = useState('');
  const [terceraCartaPosicion, setCartaTresPos] = useState('');
  

  
  /*API fetch y tirada de cartas*/
  function fetchApi() {
      fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
      .then(response => response.json())
      .then(data => setCartas(data.cards))
      .catch(error => console.log(error))
  }
  useEffect(() => {
      fetchApi()
  }, []); 
  
  function getTiradaUno(){
    let cartaUno = Math.floor(Math.random() * 77);
    let cartaUnoDescripcion = Math.round(Math.random());
    console.log(cartaUnoDescripcion)
    let primeraCartaPosicion = cartaUnoDescripcion == 1 ? 'del derecho' : 'del revés';
    cartaUnoDescripcion = cartaUnoDescripcion==1 ? cartas[cartaUno].meaning_up : cartas[cartaUno].meaning_rev;
    let cartaUnoNombre = cartas[cartaUno].name;
    setCartaUnoPos(primeraCartaPosicion);
    setCartaUnoName(cartaUnoNombre);
    setCartaUnoDesc(cartaUnoDescripcion);
  }
  function getTiradaDos(){
    let cartaDos = Math.floor(Math.random() * 77);
    let cartaDosDescripcion = Math.round(Math.random());
    console.log(cartaDosDescripcion)
    let segundaCartaPosicion = cartaDosDescripcion == 1 ? 'del derecho' : 'del revés';
    cartaDosDescripcion = cartaDosDescripcion==1 ? cartas[cartaDos].meaning_up : cartas[cartaDos].meaning_rev;
    let cartaDosNombre = cartas[cartaDos].name;
    setCartaDosPos(segundaCartaPosicion);
    setCartaDosName(cartaDosNombre);
    setCartaDosDesc(cartaDosDescripcion);
  }
  function getTiradaTres(){
    let cartaTres = Math.floor(Math.random() * 77);
    let cartaTresDescripcion = Math.round(Math.random());
    console.log(cartaTresDescripcion)
    let terceraCartaPosicion = cartaTresDescripcion == 1 ? 'del derecho' : 'del revés';
    cartaTresDescripcion = cartaTresDescripcion == 1 ? cartas[cartaTres].meaning_up : cartas[cartaTres].meaning_rev;
    let cartaTresNombre = cartas[cartaTres].name;
    setCartaTresPos(terceraCartaPosicion);
    setCartaTresName(cartaTresNombre);
    setCartaTresDesc(cartaTresDescripcion);
  }

  const downloadResults = function(){
    html2canvas(document.querySelector("#resultados")).then(canvas => {
      let img = canvas.toDataURL("img/jpg");
      let link = document.createElement("a"); /*Elemento que descargaremos*/
      link.download = "Resultados_Tarotarotara.jpg"; /*el nombre que tendrá el archivo descargado*/
      link.href = img;
      link.click();
    });
  }
  return (
    <div id="margins">
      <section id="overlay">
        <div> 
          <p>Estamos leyendo su horóscopo..</p>
          <button onClick={resultadosHoroscopo}></button>
          <p>Haga click en la imagen para ver los resultados</p>
        </div>
      </section>
      <div className="container" id="contenedorResultados">
        <main id="resultados">
          <article>
            <img src="../img/horoscopo.jpg" alt="cartas de arcanos apoyadas sobre una mesa"></img>
            <div>
              <p className="textoImportante">Ya generamos tu pronóstico para este mes!</p>
              <p> {nombre}, los astros dicen que este mes te deparará cosas muy especiales...</p>
            </div>
          </article>

          <article>
            <section>
              <p className="encabezado">Resultados</p>
            </section>
            <section>
              <p className="textoImportante underline">Tu signo solar es {signo}</p>
              <p>Este signo es conocido por ser {personalidad}</p>
            </section>
            <section>
              <p className="textoImportante underline">Amor</p>
              <p>{amor}</p>
            </section>
            <section>
              <p className="textoImportante underline">Salud</p>
              <p>{salud}</p>
            </section>
            <section>
              <p className="textoImportante underline">Dinero</p>
              <p>{dinero}</p>
            </section>
            <section>
              <p className="textoImportante underline">Suerte</p>
              <p>{suerte}</p>
            </section>
          </article>
          <article>
            <section>
              <p className="encabezado">Tu número de la suerte es el {numSuerte}</p>
              <p className="textoImportante">Según la numerología, este número se puede encontrar al sumar los dígitos de la fecha de nacimiento de una persona: el día, el número de mes y el año.</p>
            </section>
          </article>
          <article id="tiradaCartas">
            <section>
              <p className="encabezado">Tirada de cartas</p>
            </section>
            <section>
              <div>
                  <div>
                  <img src='img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro"></img>
                  <p className="textoImportante">Pasado</p>
                  </div>

                  <div>
                  <img src='../../public/img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro"></img>
                  <p className="textoImportante">Presente</p>
                  </div>

                  <div>
                  <img src='../../img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro"></img>
                  <p className="textoImportante">Futuro</p>
                  </div>
              </div>

              <div>
                  <div>
                    <p className="textoImportante underline">Pasado</p>
                    <p>{primeraCartaNombre} en posición {primeraCartaPosicion}</p>
                    <p>Descripción de tu pasado según este arcano: {primeraCartaDescripcion}</p>
                  </div>

                  <div>
                    <p className="textoImportante underline">Presente</p>
                    <p>{segundaCartaNombre} en posición {primeraCartaPosicion}</p>
                    <p>Descripción de tu presente según este arcano: {segundaCartaDescripcion}</p>
                  </div>
                  <div>
                    <p className="textoImportante underline">Futuro</p>
                    <p>{terceraCartaNombre} en posición {terceraCartaPosicion}</p>
                    <p>Descripción de tu futuro según este arcano: {terceraCartaDescripcion}</p>
                  </div>              
              </div>
            </section>
          </article>
          <button className="btn btn-primary" id="botonDescargar" onClick={downloadResults}>Descargar resultados</button>
          <section id="footerKinda">
            <p>Martina Fernández Suárez Anzorena - Comisión 22014 del curso de React. Codo a Codo 2022.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
