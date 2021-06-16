import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import TareaForm from './components/TareaForm';
import TareaCard from './components/TareaCard';

export default class App extends Component {
  state = {
    data:[]
  }

  sincronizarApi(){
    axios.get('http://localhost:8080/tareas/list')
    .then(res=>{
      const listTareas = res.data
      this.setState({
        data:listTareas
      })
    })
  }

  componentDidMount(){
    this.sincronizarApi();
  }

  agregarData = (titulo,responsable, descripcion, prioridad) => {
    const newData = {
      titulo:titulo,
      responsable:responsable,
      descripcion:descripcion,
      prioridad:prioridad
    }
    axios.post('http://localhost:8080/tareas/new/',newData)
    .then(res=>{
      this.sincronizarApi();
    })
  }

  eliminarData = (idtarea) => {
    //console.log("id = "+idtarea);
    axios.delete('http://localhost:8080/tareas/del/'+idtarea)
    .then(res=>{
      this.sincronizarApi();
    })
  }

  actualizarData = (idtarea) => {
    const newData = this.state.data.find(data=>data.idtarea===idtarea)
    this.child.cargarData(newData.idtarea, newData.titulo, newData.responsable, newData.descripcion, newData.prioridad)
  }

  actualizar = (idtarea,titulo,responsable, descripcion, prioridad) => {
    const newData = {
      idtarea:idtarea,
      titulo:titulo,
      responsable:responsable,
      descripcion:descripcion,
      prioridad:prioridad
    }
    axios.put('http://localhost:8080/tareas/upd/',newData)
    .then(res=>{
      this.sincronizarApi();
    })
  }
  
  render(){
    return (
      <div className="App">
        
        <nav className="navbar navbar-dark bg-dark">
          <a href="http://localhost:3000/" className="text-white">
            Tareas 
            <span className="badge badge-pill badge-light ml-2">
              { this.state.data.length}
            </span>
          </a>          
        </nav>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TareaForm 
                agregarData = {this.agregarData}
                onRef={ref=>(this.child=ref)}
                actualizar = {this.actualizar} />
            </div>
            <div className="col md-9">
              <div className="row">
                <TareaCard 
                  data = {this.state.data} 
                  eliminarData={this.eliminarData} 
                  actualizarData={this.actualizarData} />
              </div>
            </div>
          </div>        
        </div>
      </div>  
    );
  }
}