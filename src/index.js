import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';
import indexRoutes from './routes/index.jsx';
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'


import './assets/scss/style.css';
import CategoiresState from './context/Categories/CategoriesState';
//const hist = createBrowserHistory();

ReactDOM.render(
<CategoiresState>

    <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            })}
        </Switch>
    </HashRouter>
            </CategoiresState>
    , document.getElementById('root')); 
