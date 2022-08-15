import React from 'react';

const skills = ['HTML', 'CSS', 'JS', 'Testes unitários', 'React'] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

class About extends React.Component {
  
  render() {
    return (
      <>
        <h1>Meu nome é Severo</h1>
        <p>Sou estudante de programação web e estou aprendendo react</p>
        <h2>Minhas habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </>
    );
  }
}

export default About;