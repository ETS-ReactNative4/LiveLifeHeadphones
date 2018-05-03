import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import tabtwo from './tabtwo'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="top">
      
          <Link className="topright" to="/">
          </Link>
          <div className="tab">
              <p> Home </p>
              <p> About Us </p>
              <p className="BuyTix"> Buy Tickets </p>

          </div>
        </div>
          
          <div className="middle">
          <div className="phrase">
            <div className="Live">LIVE</div>
             
            <div className="Life">LIFE</div>
            <div className="Headphones">HEADPHONES</div>
            </div>
           
           <div className="pic">
              
             <iframe className="KF"src="https://player.vimeo.com/video/267727535?autoplay=1&loop=1" width="1140" height="643" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe>
             
          </div> 

           </div>
           <div className="bottom">
             <div className="bottomleft">
             
          <Link className= "knot" to="/">
            <i class="fas fa-minus"></i>
            <i class="fas fa-angle-double-up"></i>
          </Link>
          <Link className= "knot"  to="/tabtwo">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabthree">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabfour">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabfive">
            <i class="fas fa-minus"></i>
          </Link>
  
   

        
              </div>
             <div className="bottomright">
                          <div> FACEBOOK </div>
              <div> INSTAGRAM </div>
              <div> EMAIL </div>
             </div>
           </div>
       
     
      </div>

    );
  }
}

export default App;
