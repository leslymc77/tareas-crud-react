import React, { Component } from 'react';

export default class TareaForm extends Component {
    state = {
        idtarea: '',
        titulo: '',
        responsable: '',
        descripcion: '',
        prioridad: 'Baja'
    }

    almacenarData = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    grabarData = e => {
        if(this.state.idtarea===''){
            this.props.agregarData(this.state.titulo,this.state.responsable,this.state.descripcion,this.state.prioridad)
        }else{
            this.props.actualizar(this.state.idtarea,this.state.titulo,this.state.responsable,this.state.descripcion,this.state.prioridad)
        }        
        this.setState({idtarea:'',titulo:'',responsable:'',descripcion:'',prioridad:'Baja'})
    }

    cargarData = (idtarea,titulo,responsable,descripcion,prioridad) => {
        this.setState({idtarea:idtarea,titulo:titulo,responsable:responsable,descripcion:descripcion,prioridad:prioridad})
    }

    componentDidMount(){
        this.props.onRef(this);
    }
  
    render() {
      return (
        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <input type="hidden" className="form-control" name="idtarea" id="" value={this.state.idtarea} />
              <input
                type="text"
                name="titulo"
                className="form-control"
                value={this.state.titulo}
                onChange={this.almacenarData}
                placeholder="Titulo"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="responsable"
                className="form-control"
                value={this.state.responsable}
                onChange={this.almacenarData}
                placeholder="Responsable"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="descripcion"
                className="form-control"
                value={this.state.descripcion}
                onChange={this.almacenarData}
                placeholder="Descripcion"
                />
            </div>
            <div className="form-group">
              <select
                  name="prioridad"
                  className="form-control"
                  value={this.state.prioridad}
                  onChange={this.almacenarData}
                >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
            </div>
            { this.state.idtarea===''? 
                <button type="button" className="btn btn-primary" onClick={this.grabarData}>Guardar</button> 
                : 
                <button type="button" className="btn btn-warning" onClick={this.grabarData}>Actualizar</button>
            }
          </form>
        </div>
      )
    }
  
  }  