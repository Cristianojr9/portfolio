import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Home/styles';
import { Content } from './styles.js';
import { Header } from '../../components';

import Photo from '../../assets/foto.jpeg';

export default function Projects() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Cristiano Júnior</h1>
        <section>
          <span>Atualmente imerso no ecossistema javascript / typescript, focado mais
          no frontend e UI/UX design,<br />
          experiência utilizando Javascrip, HTML, CSS, ReactJS, NodeJS, Typescript, React Native. <br/>
          <ul>
            <li>
              Responsável
            </li>  
            <li>
              Trabalha bem em grupo
            </li>
            <li>
              Experiência com metodologias ágeis
            </li>
            <li>
            Participa de projetos que facilitem a vida das pessoas
              aplicando tecnologias modernas.
            </li>
          </ul>   
          </span>
          <img src={Photo} alt="pic"/>
        </section>
        <Link to="/"><button>Voltar</button></Link>  
      </Content>
    </Container>
  )
}
