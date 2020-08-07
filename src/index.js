import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css'
import './styles/settings/global.css'
import Home from './pages/Home';
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria'
import Page405 from './pages/Page404'

import { BrowserRouter, Switch, Route } from  'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/cadastro/video" component={Video} />
    <Route path="/cadastro/categoria" component={Categoria} />
    <Route path="/" component={Home} exact />
    <Route component={Page405} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

