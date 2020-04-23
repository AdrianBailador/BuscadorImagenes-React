import React, { Component } from 'react';


class Buscador extends Component{

    //Leer los valores de los input con react
    busqueRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Cogemos el valor del input
        const termino = this.busqueRef.current.value;
        //console.log(this.busqueRef.current.value);
        //this.props.datosBusqueda(this.busqueRef.current.value);
        
        //Enviamos al componente principal
        this.props.datosBusqueda(termino);

    }


    render(){
        return (
            <form onSubmit={this.obtenerDatos}> 
                <div className="row">
                 
                    <div className="form-group col-md-8">
                        <input ref={this.busqueRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Futbol" />

                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"  value="Buscar..." />

                    </div>

                </div>
            </form>
        );
    }
}

export default Buscador;

