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
        no frontend e UI/UX design.<br />
        Sou muito responsável, muito fácil de trabalhar em grupo e tenho experiência com metodologias ágeis. <br/>
        Meu objetivo é participar de projetos que facilitem a vida das pessoas
        aplicando tecnologias modernas. <br/>
        Já trabalhei utilizando Javascrip, HTML, CSS, ReactJS, NodeJS, Typescript, React Native.
        </span>
          <img src={Photo} alt="pic"/>
        </section>
        <Link to="/"><button>Voltar</button></Link>  
      </Content>
    </Container>
  )
}
