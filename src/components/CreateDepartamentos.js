import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class CreateDepartamentos extends Component {

  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    status: false
  }

  insertarDepartamento = (e) => {
    e.preventDefault();
    let request = "api/Departamentos";
    let url = Global.urlDepartamentos + request;

    let id = parseInt(this.cajaNumero.current.value);
    let nombre = this.cajaNombre.current.value;
    let localidad = this.cajaLocalidad.current.value;

    let departamento = {
      numero: id,
      nombre: nombre,
      localidad: localidad
    }

    axios.post(url, departamento).then(response => {
      console.log("Insertado");
      this.setState({
        status: true
      })
    })
  }

  render() {

    if (this.state.status == true) {      
      return(<Navigate to="/"/>)
    } else {
      return (
        <div>
          <h1>Crear Departamentos</h1>
          <form>
            <label>ID Departamento</label>
            <input type='text' ref={this.cajaNumero}/>
            <label>Nombre Departamento</label>
            <input type='text' ref={this.cajaNombre}/>
            <label>Localidad Departamento</label>
            <input type='text' ref={this.cajaLocalidad}/>
            <button className='btn btn-info' onClick={this.insertarDepartamento}>Insertar Departamento</button>
          </form>
        </div>
      )
    }

  }
}
