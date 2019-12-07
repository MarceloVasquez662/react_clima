import React, { Component } from "react";
import termometro from "../imagenes/termometro.svg";
import clima from "../imagenes/clima.svg";
import humedad from "../imagenes/humedad.svg";

const Datos = props => {
  return (
    <div
      className="container text-center p-5"
      style={{
        backgroundColor: "rgba(175, 171, 175,1)",
        borderRadius: "6px"
      }}
    >
      <div>
        <h1>El clima en tu ciudad es :</h1>
      </div>
      <div className="row justify-content-center m-3">
        <img src={termometro} width="30" height="30" className="mr-2" />
        <h5>Temperatura: {props.temperatura - 273.15}°</h5>
      </div>
      <div className="row justify-content-center">
        <img src={humedad} width="30" height="30" className="mr-2" />
        <h5>Humedad: {props.humedad}%</h5>
      </div>
      <div className="row justify-content-center m-3">
        <img src={clima} width="25" height="25" className="mr-2" />
        <h5>Descripcion: {props.descripcion}</h5>
      </div>
    </div>
  );
};

export default Datos;
