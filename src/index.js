import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


import './assets/scss/style.css';
import CategoriesState from './context/Categories/CategoriesState';
import ProductsState from './context/Products/ProductsState';
import AuthenticationState from './context/Authentication/AuthenticationState';
import LogIn from './views/Authentication/LogIn.js';
import Fulllayout from './layouts/fulllayout.jsx';
//const hist = createBrowserHistory();

ReactDOM.render(
    <AuthenticationState>
    <CategoriesState>
        <ProductsState>
            <HashRouter>
                <Switch>
                    {/*indexRoutes.map((prop, key) => {
                        console.log(prop)
                        return <Route path={prop.path} key={key} component={prop.component} />;
                    })**/}
                   <Route exact path='/' component={LogIn} />
                   <Route path='/admin'  component={Fulllayout} />
                </Switch>
            </HashRouter>
        </ProductsState>
    </CategoriesState>
    </AuthenticationState>
    , document.getElementById('root')); 
