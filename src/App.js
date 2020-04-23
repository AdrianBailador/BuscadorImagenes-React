import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';


class App extends Component{

  state = {
     termino : '',
     imagenes : [],
     pagina: ''
  }


  //para que al cambiar de pagina nos lleve hacia arriba
  scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }


  paginaAnterior = () => {
       //leer el state de la pagina actual
       let pagina = this.state.pagina;

       //Leer si la pagina es 1, no ir hacia atras
       if(pagina ===1) return null;
       //Resta uno a la pagina actual
         pagina -= 1;
       //agregar el cambio al state, para que vaya pasando, 1,2,3
         this.setState({
           pagina
         },() =>{
           this.consultarApi();
           this.scroll();
         } );
   
        // console.log(pagina);

  }

    paginaSiguiente = () => {
      //leer el state de la pagina actual
        let pagina = this.state.pagina;
      //sumar uno a la pagina actual
        pagina += 1;
      //agregar el cambio al state, para que vaya pasando, 1,2,3
        this.setState({
          pagina
        },() =>{
          this.consultarApi();
          this.scroll();
        } );

       // console.log(pagina);

    }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url).then(respuesta => respuesta.json()).then(resultado => this.setState({imagenes : resultado.hits}))
  }


  datosBusqueda = (termino) => {
   this.setState({
     termino : termino,
     pagina : 1
   },() => {
     this.consultarApi();
   })
  }


  render(){
  return (
    <div className="App">
     <div className="jumbotron">
       <p className="lead tex-center">Buscador de Imágenes</p>

       <Buscador
        datosBusqueda = {this.datosBusqueda}
       
       />
     </div>   
    <div className="row justify-content-center">
          <Resultado 
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}

            
          />  
    </div>
    </div>
  );
  }
}

export default App;
