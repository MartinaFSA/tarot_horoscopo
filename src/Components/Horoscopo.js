import React, { useState, useEffect } from "react";

function Horoscopo(params) {
  const [diaMes, setDiaMes] = useState("");
  const [signo, setSigno] = useState("");

  const getDiaMes = (e) => {
    setDiaMes(e.target.value);
  };

  const calcularSigno = (e) => {
    e.preventDefault();
    const fecha = new Date(params.fechaNacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const anio = fecha.getFullYear();
    const signos = fetch(
      "https://abrojodigital.github.io/luna-magica/src/Data/horoscopo.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const signos = data.signos;
        signos.map((signo) => {
          if (signo.mes === mes && signo.dia === dia) {
            setSigno(signo.signo);
          }
        });
      });
  };
  useEffect(() => {
    calcularSigno();
  }, [params.fechaNacimiento]);

  return <div className="container"></div>;
}

export default Horoscopo;
