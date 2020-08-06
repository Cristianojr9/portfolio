import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Home/styles';
import { Content, CardDeck, Card, CardBody, Image,  } from './styles';
import { Header } from '../../components';

import Sigaa from '../../assets/sigaa.png';
import BeTheHero from '../../assets/be-the-hero.png';
import MeuTroco from '../../assets/meutroco.jpeg';

export default function Projects() {
  function handleToGithub(url) {
    window.open(url);
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Meus projetos</h1>
        <span>Aqui você encontra meus três principais projetos realizados até hoje <br/>
        você pode acessar o repositório no github clicando neles. 
        </span>
        <CardDeck  >
          <Card onClick={() => handleToGithub("https://github.com/Cristianojr9/meutroco")}>
            <Image>
              <img src={Sigaa} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>sigaa-new-design</h3>
              <p>
                Desenvolvimento de um re-design do Sigaa, utilizei ReactJS com CSS. 
              </p>
            </CardBody>
          </Card>
          <Card onClick={() => handleToGithub("https://github.com/Cristianojr9/meutroco")}>
            <Image>
              <img src={BeTheHero} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>sigaa-new-design</h3>
              <p>
                Desenvolvimento de um re-design do Sigaa, utilizei ReactJS com CSS. 
              </p>
            </CardBody>
          </Card>
          <Card onClick={() => handleToGithub("https://github.com/Cristianojr9/meutroco")}>
            <Image>
              <img src={MeuTroco} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>sigaa-new-design</h3>
              <p>
                Desenvolvimento de um re-design do Sigaa, utilizei ReactJS com CSS. 
              </p>
            </CardBody>
          </Card>
          <Card onClick={() => handleToGithub("https://github.com/Cristianojr9/meutroco")}>
            <Image>
              <img src={MeuTroco} alt="sigaa"/>
            </Image>
            <CardBody>
              <h3>sigaa-new-design</h3>
              <p>
                Desenvolvimento de um re-design do Sigaa, utilizei ReactJS com CSS. 
              </p>
            </CardBody>
          </Card>
        </CardDeck>
        <Link to="/"><button>Voltar</button></Link>
      </Content>
    </Container>
  )
}
