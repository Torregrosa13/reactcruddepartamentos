import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { NavLink, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default class DeleteDepartamento extends Component {

    state = {
        status: false
    }

    eliminarDepartamento = () =>{
        var request = "api/departamentos/" + this.props.id;
        var url = Global.urlDepartamentos + request;
        axios.delete(url).then(response=>{
            this.setState({
                status: true
            })
        })
        
        (<Navigate to="/"/>)
    }

    pulsarBotonBorrar = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              this.eliminarDepartamento();
            }
          });
    }

  render() {
    return (
      <div>
        <h1>Delete Departamento: {this.props.id}</h1>
        <button onClick={this.pulsarBotonBorrar} className="btn btn-danger">Eliminar</button>
      </div>
    )
  }
}
