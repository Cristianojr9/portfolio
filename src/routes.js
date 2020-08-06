import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import About from './pages/About/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}