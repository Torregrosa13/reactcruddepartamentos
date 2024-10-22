import React, { Component } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'
import CreateDepartamentos from './CreateDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import HomeDepartamentos from './HomeDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import ModificarDepartamento from './ModificarDepartamento'
import DeleteDepartamento from './DeleteDepartamento'



export default class Router extends Component {
  render() {

    function DetalleDepartamentoElement(){
        let {iddepartamento} = useParams();
        return(<DetalleDepartamento id={iddepartamento}/>)
    }

    function UpdateDepartamentoElement(){
        let {id} = useParams();
        let {nombre} = useParams();
        let {localidad} = useParams();
        return (<ModificarDepartamento id={id} nombre={nombre} localidad={localidad}/>)
    }

    function DeleteDepartamentoElement(){
        let {id} = useParams();
        return(<DeleteDepartamento id={id}/>)
    }

    return (
        <BrowserRouter>
        <MenuDepartamentos/>
        <Routes>
          <Route path="/" element={<HomeDepartamentos/>}/>
          <Route path="/create" element={<CreateDepartamentos/>}/>
          <Route path="/detail/:iddepartamento" element={<DetalleDepartamentoElement/>}/>
          <Route path="/modificar/:id/:nombre/:localidad" element={<UpdateDepartamentoElement/>}/>
          <Route path="/delete/:id" element={<DeleteDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
