import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './styles';

export default function Header() {
  return  (
    <Navbar>
      <section>
        <span>cristianojr9</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/18oTKIUXrSLc7yhIcoOuWfH3lRWFgvBi-/view?usp=sharing">Currículo</a>
          </li>
        </ul>
      </section>
    </Navbar>
  )
}