import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class ModificarDepartamento extends Component {

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    updateDepartamento = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaId.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        var request = "api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.put(url, departamento).then(response=>{
            console.log("modificado");
            this.setState({
                status: true
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (<Navigate to="/"/>)
        }
        <h1>Modificar Departamento: {this.props.id}, {this.props.nombre}, {this.props.localidad}</h1>
        <NavLink to="/">Back to Home</NavLink>
        <form>
            <label>Id Departamento</label>
            <input type='text' ref={this.cajaId} defaultValue={this.props.id} disabled></input>
            <label>Nombre Departamento</label>
            <input type='text' ref={this.cajaNombre} defaultValue={this.props.nombre}></input>
            <label>Localidad Departamento</label>
            <input type='text' ref={this.cajaLocalidad} defaultValue={this.props.localidad}></input>
            <button onClick={this.updateDepartamento} className='btn btn-danger'>Editar Dep</button>
        </form>
      </div>
    )
  }
}
