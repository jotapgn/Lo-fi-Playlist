import React from 'react';
import { BrowserRouter, Switch, Route } from  'react-router-dom';
import Home from './pages/Home';
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria'
import Page405 from './pages/Page404'

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
        <Route path="/cadastro/video" component={Video} />
        <Route path="/cadastro/categoria" component={Categoria} />
        <Route path="/" component={Home} exact />
        <Route component={Page405} />
        </Switch>
    </BrowserRouter>
    )
}