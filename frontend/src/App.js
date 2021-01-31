import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from 'react-google-charts';

function App() {
  const TITULO = "Quantidade de cadastro do primeiro semestre";
  const ANIMACAO = { duration: 1000, easing: 'out', startup: true };

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 100],
    ['Fevereiro', 20],
    ['Março', 13],
    ['Abril', 56],
    ['Maio', 80],
    ['Junho', 42],
  ]);

  useEffect(() => {
    function alterarDados() {
      const dadosGraficos = dados.map(linha => {
        if (Number.isInteger(linha[1])) {
          linha[1] = Math.floor(Math.random() * 1001);
        }
        return linha;
      });
      setDados(dadosGraficos);
    }
    const intervalId = setInterval(() => alterarDados(), 5000);

    return() =>{
      clearInterval(intervalId);
    }

  }, [dados])

  return (
    <div>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          is3D: true
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          pieHole: 0.2
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: '50%' },
          hAxis: { title: 'Quantidade' },
          vAxis: { title: 'Mês' },
          animation: ANIMACAO
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: 'Quantidade' },
          vAxis: { title: 'Mês' },
          animation: ANIMACAO
        }}
      />

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'AreaChart'}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: 'Quantidade' },
          vAxis: { title: 'Mês' },
          animation: ANIMACAO
        }}
      />
    </div>
  );

}

export default App;
