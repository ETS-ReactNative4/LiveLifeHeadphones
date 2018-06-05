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
          <div className="HeadLogo2"> 
                      <Link className="topright2" to="/"></Link>

            </div>

          <div className="tab">
          
            <div className="tabdiff">
              <Link className="H2" to="/"> Home </Link>
              <Link className="H2" to="/aboutus"> About Us </Link>
              <a className="BuyTix" href ="https://www.eventbrite.com/o/live-life-headphones-16549205162"> Buy Tickets </a>
            </div>
        <div>
  
              <div className="tabdiff2">
              <Link className="J2" to="/"> Home </Link>
              <Link className="J2" to="/aboutus"> About Us </Link>
              <a className="BuyTix2" href ="https://www.eventbrite.com/o/live-life-headphones-16549205162"> Buy Tickets </a>
            </div>
        
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
              
             {/* <iframe className="KF"src="https://player.vimeo.com/video/270964915?&autoplay=1&loop=1" width="1140" height="643" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe> */}
             <iframe src="https://player.vimeo.com/video/271002021?title=0&byline=0&portrait=0&autoplay=1&loop=1" width="1140" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe>
          </div> 

           </div>
              <div className="middle2">
     
           <div className="shortname" > Live Life Headphones </div>
           <div className="picx">
              
             {/* <iframe className="KF"src="https://player.vimeo.com/video/270964915?&autoplay=1&loop=1" width="1140" height="643" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe> */}
             <iframe src="https://player.vimeo.com/video/271002021?title=0&byline=0&portrait=0&autoplay=1&loop=1" width="1140" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe>
          </div> 

           </div>
           <div className="bottom">
             <div className="bottomleft">
              <div className="BLT"/>
             <div className="BLB">
                <Link className="BLC" to="/tabtwo"> ENTER </Link>

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
                    <div className="BLT2"/>

                    <div className="BLB2">
                <Link className="BLC" to="/tabtwo"> GO </Link>

                <Link className= "knot" to="/">
                
                  <i class="fas fa-circle"></i>
                </Link>
                <Link className= "knot"  to="/tabtwo">
                  <i class="far fa-circle"></i>
                </Link>
                <Link className= "knot"  to="/tabthree">
                  <i class="far fa-circle"></i>
                </Link>
                <Link className= "knot"  to="/tabfour">
                  <i class="far fa-circle"></i>
                </Link>
                <Link className= "knot"  to="/tabfive">
                  <i class="far fa-circle"></i>
                </Link>
          </div>
   

        
              </div>

              <div className="bottomright">
                <a className="BB" href = "https://www.facebook.com/livelie.headphones.3" > FACEBOOK </a>
                <a className="BB" href = "https://www.instagram.com/livelifeheadphones/?hl=en" > INSTAGRAM </a>
                <a className="BB" href = "https://twitter.com/ILiveLifeSilent"> TWITTER </a>
              </div>

              <div className="bottomright2">
                <a className="BB2" href = "https://www.facebook.com/livelie.headphones.3" >
                  <i class="fab fa-facebook"></i>
                </a>
                <a className="BB2" href = "https://www.instagram.com/livelifeheadphones/?hl=en" >
                  <i class="fab fa-instagram"></i>
                </a>
                <a className="BB2" href = "https://twitter.com/ILiveLifeSilent">
                <i class="fab fa-twitter"></i>
                 </a>
              </div>

           </div>
       
     
      </div>

    );
  }
}

export default App;
