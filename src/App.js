import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import tabtwo from './tabtwo'
import aboutus from './aboutus'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="top">
      
          <Link className="topright" to="/"></Link>
          <div className="HeadLogo"> LIVE LIFE HEADPHONES </div>
          <div className="tab">
            <div className="tabdiff">
              <Link className="H2" to="/"> Home </Link>
              <Link className="H2" to="/aboutus"> About Us </Link>
              <a className="BuyTix" href ="https://www.eventbrite.com/o/live-life-headphones-16549205162"> Buy Tickets </a>
            </div>
              <div className="bar"/>
          </div>
        </div>
          
          <div className="middle">
          <div className="phrase">
            <div className="Live">COME</div>
             
            <div className="Life">BE</div>
            <div className="Headphones">YOURSELF</div>
            </div>
           
           <div className="pic">
              
             <iframe className="KF"src="https://player.vimeo.com/video/267727535?autoplay=1&loop=1" width="1140" height="643" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe>
             
          </div> 

           </div>
           <div className="bottom">
             <div className="bottomleft">
              <div className="BLT"/>
             <div className="BLB">
                             <div> Enter Here </div>

                <Link className= "knot" to="/">
                
                  <i class="fas fa-caret-square-right"></i>
                </Link>
                <Link className= "knot"  to="/tabtwo">
                  <i class="far fa-caret-square-right"></i>
                </Link>
                <Link className= "knot"  to="/tabthree">
                  <i class="far fa-caret-square-right"></i>
                </Link>
                <Link className= "knot"  to="/tabfour">
                  <i class="far fa-caret-square-right"></i>
                </Link>
                <Link className= "knot"  to="/tabfive">
                  <i class="far fa-caret-square-right"></i>
                </Link>
          </div>
   

        
              </div>
              <div className="bottomright">
                <a className="BB" href = "https://www.facebook.com/livelie.headphones.3" > FACEBOOK </a>
                <a className="BB" href = "https://www.instagram.com/livelifeheadphones/?hl=en" > INSTAGRAM </a>
                <a className="BB" href = "https://twitter.com/Lawless_Ent"> TWITTER </a>
              </div>
           </div>
       
     
      </div>

    );
  }
}

export default App;
