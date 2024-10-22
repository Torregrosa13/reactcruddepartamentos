import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from "./../assets/images/loading.jpg"
import { NavLink } from 'react-router-dom'

export default class HomeDepartamentos extends Component {

    state = {
        status: false,
        departamentos: []
    }

    loadDepartamentos = () =>{
        let request = "/api/Departamentos";
        let url = Global.urlDepartamentos + request;
        axios.get(url).then(response=>{
            this.setState({
                status: true,
                departamentos: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }

    render() {
        
        if(this.state.status == false){
            return(<img src={loadingImage}/>)
        }else{            
            return (
                <div>
                    <h1>HomeDepartamentos</h1>
                    <table className='table table-light table-hover table-bordered'>
                        <thead className='table table-dark'>
                            <tr>
                                <th>Número</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Detalle</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index)=>{
                                    return(<tr key={index}>
                                        <td>{departamento.numero}</td>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td><NavLink to={"/detail/" + departamento.numero} className="btn btn-warning">Detalle</NavLink></td>
                                        <td><NavLink to={"/modificar/" + departamento.numero + "/" + departamento.nombre + "/" + departamento.localidad} className="btn btn-success">Editar</NavLink></td>
                                        {/* <td><button className="btn btn-danger" onClick={()=>{this.eliminarDepartamento(departamento.numero)}}>Borrar</button></td> */}
                                        <td><NavLink to={"/delete/" + departamento.numero} className="btn btn-danger">Eliminar</NavLink></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}
