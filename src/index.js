import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import tabtwo from './tabtwo';
import tabtwo1 from './tabtwo1';
import tabtwo2 from './tabtwo2';
import tabtwo3 from './tabtwo3';
import tabtwo4 from './tabtwo4';
import tabtwo5 from './tabtwo5';
import tabtwo6 from './tabtwo6';

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
                <Route path = "/tabtwo1" component= {tabtwo1} />
                <Route path = "/tabtwo2" component= {tabtwo2} />
                <Route path = "/tabtwo3" component= {tabtwo3} />
                <Route path = "/tabtwo4" component= {tabtwo4} />
                <Route path = "/tabtwo5" component= {tabtwo5} />
                <Route path = "/tabtwo6" component= {tabtwo6} />



            </Switch>
        </div>
        </Router>
    , document.getElementById('root'));
