import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import { toast } from 'react-toastify';

import { Container } from '../Home/styles';
import { Content, CardDeck, Card, CardBody, Image,  } from './styles';
import { Header } from '../../components';

import Sigaa from '../../assets/sigaa.png';
import BeTheHero from '../../assets/be-the-hero.png';
import MeuTroco from '../../assets/meutroco.jpeg';
import Goline from '../../assets/goline.jpeg';

export default function Projects() {
  function handleToGithub(url) {
    window.open(url);
  }

  function handleToDemo(url) {
    window.open(url);
  }

  function erroDemo() {
    toast.error('Demo não disponível');
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus projetos</h1>
        <span>Aqui você encontra meus principais projetos realizados até hoje <br/>
        você pode acessar o repositório no github no ícone ou visualizar a demo. 
        </span>
        <CardDeck  >
          <Card>
            <Image>
              <img src={Sigaa} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>Sigaa new design</h3>
              <p>
                Sistema web de um re-design do Sigaa, utilizado ReactJS com StyledComponents. 
              </p>
              <span onClick={() => handleToDemo("https://sigaademo.netlify.app")}>Acessar demo</span>
              <span><AiFillGithub size="30px" onClick={() => handleToGithub("https://github.com/Cristianojr9/sigaa-new-design")}/></span>
            </CardBody>
          </Card>
          <Card>
            <Image>
              <img src={BeTheHero} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>Be the hero</h3>
              <p>
                Sistema web feita com ReactJS, onde as organizações podem criar novos incidentes e gerenciá-los por exclusão. 
              </p>
              <span onClick={() => erroDemo()}>Acessar demo</span>
              <span><AiFillGithub size="30px" onClick={() => handleToGithub("https://github.com/Cristianojr9/be-the-hero")}/></span>
            </CardBody>
          </Card>
          <Card>
            <Image>
              <img src={MeuTroco} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>Meu troco</h3>
              <p>
                Landingpage da meu troco, utilizando ReactJS, TypeScript, StyledComponents.
              </p>
              <span onClick={() => erroDemo()}>Acessar demo</span>
              <span><AiFillGithub size="30px" onClick={() => handleToGithub("https://github.com/Cristianojr9/meutroco")}/></span>
            </CardBody>
          </Card>
          <Card>
            <Image>
              <img src={Goline} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>Goline</h3>
              <p>
                Landingpage desenvolvida para a Startup Goline. <br /> Foi utilizado HTML, CSS. 
              </p>
              <span onClick={() => erroDemo()}>Acessar demo</span>
              <span><AiFillGithub size="30px" onClick={() => handleToGithub("https://github.com/Cristianojr9/Goline")}/></span>
            </CardBody>
          </Card>
        </CardDeck>
        <Link to="/"><button>Voltar</button></Link>
      </Content>
    </Container>
  )
}
