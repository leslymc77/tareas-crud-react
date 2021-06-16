import React, { Component } from 'react'

export default class TareaCard extends Component {
    render(){
        return(
             this.props.data.map((data) => (
                <div className="col-md-4" key={data.idtarea}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{ data.titulo }</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                            { data.prioridad }
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{ data.descripcion }</p>
                            <p><mark>{ data.responsable }</mark></p>
                        </div>
                        <div className="card-footer">
                            <p>
                                <button className="btn btn-danger btn-sm" onClick={this.props.eliminarData.bind(this, data.idtarea)}>Borrar</button>
                            </p>
                            <p>
                                <button className="btn btn-secondary btn-sm" onClick={this.props.actualizarData.bind(this, data.idtarea)}>Editar</button>
                            </p>
                        </div>
                    </div>
                </div>
            ))
       )
    }
}           