import React, {useState} from 'react';
import './App.css';
import Chart from 'react-google-charts';

function App() {
  const TITULO = "Quantidade de cadastro do primeiro semestre";
  
  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 100],
    ['Fevereiro', 20],
    ['Março', 13],
    ['Abril', 56],
    ['Maio', 80],
    ['Junho', 42],

  ]);



  return (
   
}

export default App;
