import React, { Component } from 'react';
import Cabecera from './components/Cabecera/Cabecera';
import Contenido from './components/Contenido/Contenido';
import Footer from './components/Footer/Footer';


class App  extends Component {
  render (){
    return (
      <div className='App'>
        <Cabecera />
        <Contenido />
        <Footer />
      </div>
  );

  }
}


export default App;
