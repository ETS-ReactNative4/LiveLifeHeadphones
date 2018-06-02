import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import tabtwo from './tabtwo';
import tabtwob from './tabtwob';
import tabthree from './tabthree';
import tabfour from './tabfour';
import tabfive from './tabfive';
import aboutus from './aboutus';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';


ReactDOM.render(
     <Router>
        <div>
            <Switch>
                <Route exact path = "/" component= {App} />
                <Route path = "/tabtwo" component= {tabtwo} />
                <Route path = "/tabtwob" component= {tabtwob} />
                <Route path = "/tabthree" component= {tabthree} />
                <Route path = "/tabfour" component= {tabfour} />
                <Route path = "/tabfive" component= {tabfive} />
                <Route path = "/aboutus" component= {aboutus} />

            </Switch>
        </div>
        </Router>
    , document.getElementById('root'));
