import React, { Component } from "react";
import Formulario from "./componentes/Formulario";
import axios from "axios";
import Datos from "./componentes/Datos";

export default class App extends Component {
  state = {
    ciudad: "",
    pais: "",
    tiempo: []
  };

  recibirDatos = (ciudad, pais) => {
    this.setState(
      { ciudad: ciudad, pais: pais, tiempo: [] },
      this.consultarApi
    );
  };

  consultarApi = () => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.ciudad},${this.state.pais}&appid=89e5f2c4462bdf1dae8dea49aa3e318e`;
    axios(url)
      .then(respuesta => this.setState({ tiempo: respuesta.data }))
      .catch(console.log());
  };

  render() {
    return (
      <section>
        <Formulario recibirDatos={this.recibirDatos} />
        {this.state.tiempo.length !== 0 ? (
          <Datos
            humedad={this.state.tiempo.main.humidity}
            descripcion={this.state.tiempo.weather.map(
              weather => weather.description
            )}
            temperatura={this.state.tiempo.main.temp}
          />
        ) : (
          <div className="text-center alert alert-danger col-6 mx-auto">
            <h1>
              Ingrese ciudad y codigo del pais. Si ve este mensaje nuevamente,
              revise los datos.
            </h1>
          </div>
        )}
      </section>
    );
  }
}
