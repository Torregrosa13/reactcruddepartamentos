import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'
import { NavLink } from 'react-router-dom'
import loadingImage from "./../assets/images/loading.jpg"

export default class DetalleDepartamento extends Component {

    state = {
        departamento: null
    }

    findDepartamento = () =>{
        let request = "api/departamentos/" + this.props.id;
        let url = Global.urlDepartamentos + request;
        axios.get(url).then(response=>{
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.findDepartamento();
    }

  render() {
    return (
      <div>
        <NavLink to="/">Back To List</NavLink>
        {
            this.state.departamento ?
            (<ul>
                <li>Número: {this.state.departamento.numero}</li>
                <li>Nombre: {this.state.departamento.nombre}</li>
                <li>Localidad: {this.state.departamento.localidad}</li>
            </ul>):
            (<img src={loadingImage}/>)
        }
      </div>
    )
  }
}
