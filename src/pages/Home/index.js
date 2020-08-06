import React from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import { Container, Content } from './styles';
import { Header } from '../../components'; 

import Hero from '../../assets/hero.png';

export default function Index() {
  function handleToPage(url) {
    window.open(url);
  }

  return (
    <Container>
      <Header />
      <Content>   
        <section>
          <span role="img" aria-label="hello">👋</span>
          <h1>
            <span>
              Olá, meu nome é
            </span>
            <h2>Cristiano Júnior.</h2>
          </h1>
          <p>
            Sou desenvolvedor web. <br />
            Trabalho com front-end e ui design.
          </p>
          <Link to="/projects"><button>Projetos</button></Link>
        </section>
        <img src={Hero} alt="hero"/>
        <ul>
          <li>
            <AiOutlineInstagram size="30px" onClick={() => handleToPage("https://www.instagram.com/cristianojr9/")}/>
          </li>
          <li>
            <AiFillGithub size="30px" onClick={() => handleToPage("https://github.com/Cristianojr9")}/>
          </li>
          <li>
            <FaLinkedinIn size="30px" onClick={() => handleToPage("https://www.linkedin.com/in/cristianojr9/")} />
          </li>
        </ul>  
      </Content>
    </Container>
  );
}