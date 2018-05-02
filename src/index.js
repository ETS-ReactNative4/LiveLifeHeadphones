import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import tabtwo from './tabtwo';
import tabthree from './tabthree';
import tabfour from './tabfour';
import tabfive from './tabfive';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';


ReactDOM.render(
     <Router>
        <div>
            <Switch>
                <Route exact path = "/" component= {App} />
                <Route path = "/tabtwo" component= {tabtwo} />
                <Route path = "/tabthree" component= {tabthree} />
                <Route path = "/tabfour" component= {tabfour} />
                <Route path = "/tabfive" component= {tabfive} />
            
               

            </Switch>
        </div>
        </Router>
    , document.getElementById('root'));
