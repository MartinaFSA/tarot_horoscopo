export default function tiradaCartas(props) {
    return (
        <article id="tiradaCartas">
            <section>
              <p className="encabezado">Tirada de cartas</p>
            </section>
            <section>
              <div>
                  <div>
                    <img src='./img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro" href="#carta_pasado"></img>
                    <p className="textoImportante">Pasado</p>
                  </div>

                  <div>
                    <img src='./img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro" href="#carta_paresente"></img>
                    <p className="textoImportante">Presente</p>
                  </div>

                  <div>
                    <img src='./img/hand.jpg' alt="ilustración de una mano con un ojo entreabierto en el centro" href="#carta_futuro"></img>
                    <p className="textoImportante">Futuro</p>
                  </div>
              </div>

              <div>
                  <div>
                    <p className="textoImportante underline" id="carta_pasado">Pasado</p>
                    <p>{props.primeraCartaNombre} en posición {props.primeraCartaPosicion}</p>
                    <p>Descripción de tu pasado según este arcano: {props.primeraCartaDescripcion}</p>
                  </div>

                  <div>
                    <p className="textoImportante underline" id="carta_paresente">Presente</p>
                    <p>{props.segundaCartaNombre} en posición {props.segundaCartaPosicion}</p>
                    <p>Descripción de tu presente según este arcano: {props.segundaCartaDescripcion}</p>
                  </div>
                  <div>
                    <p className="textoImportante underline" id="carta_futuro">Futuro</p>
                    <p>{props.terceraCartaNombre} en posición {props.terceraCartaPosicion}</p>
                    <p>Descripción de tu futuro según este arcano: {props.terceraCartaDescripcion}</p>
                  </div>              
              </div>
            </section>
        </article>
    )
}