import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class Tarefas extends React.Component {
  render(){
    return (
      <>
      <h2>Lista de Tarefas</h2>
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
      </>
    )
  }
}

export default Tarefas;