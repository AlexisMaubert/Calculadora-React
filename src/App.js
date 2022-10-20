import './App.css';
import logo from './img/Logo-Casio.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const mostrarResultado = () => {
    if(input){
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='Logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={ input }/>
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>1</Boton>
          <Boton manejarClick= {agregarInput}>2</Boton>
          <Boton manejarClick= {agregarInput}>3</Boton>
          <Boton manejarClick= {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>4</Boton>
          <Boton manejarClick= {agregarInput}>5</Boton>
          <Boton manejarClick= {agregarInput}>6</Boton>
          <Boton manejarClick= {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>7</Boton>
          <Boton manejarClick= {agregarInput}>8</Boton>
          <Boton manejarClick= {agregarInput}>9</Boton>
          <Boton manejarClick= {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick= {mostrarResultado}>=</Boton>
          <Boton manejarClick= {agregarInput}>0</Boton>
          <Boton manejarClick= {agregarInput}>.</Boton>
          <Boton manejarClick= {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}/>
        </div>
      </div>
    </div>
  );
}

export default App;
