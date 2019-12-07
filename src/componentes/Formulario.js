import React, { Component } from "react";

export default class Formulario extends Component {
  ciudadRef = React.createRef();
  paisRef = React.createRef();

  onsubmit = e => {
    e.preventDefault();
    this.props.recibirDatos(
      this.ciudadRef.current.value,
      this.paisRef.current.value
    );
  };

  render() {
    return (
      <div
        className="jumbotron text-center"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <h1 className="text-white m-4">Climapp</h1>
        <form onSubmit={this.onsubmit}>
          <div>
            <input
              className="col-sm-2 col-md-4 col-lg-5 m-2"
              placeholder="Ingresa el nombre de la ciudad"
              ref={this.ciudadRef}
              style={{ borderRadius: "6px" }}
              required="required"
            />
          </div>
          <div>
            <input
              className=" col-sm-2 col-md-4 col-lg-5 m-2"
              placeholder="Ingresa el codigo del pais"
              ref={this.paisRef}
              style={{ borderRadius: "6px" }}
              required="required"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success col-sm-2 col-md-4 col-lg-5"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
