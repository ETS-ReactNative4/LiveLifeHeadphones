import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class tabtwo extends Component {
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
                 <div className="tabdiff2">
              <Link className="J2" to="/"> Home </Link>
              <Link className="J2" to="/../aboutus"> About Us </Link>
              <a className="BuyTix" href ="https://www.eventbrite.com/o/live-life-headphones-16549205162"> Buy Tickets </a>
            </div>
              <div className="bar"/>
          </div>
        </div>
          
          <div className="middle">
               <div className="phrase5">
                   <div className="contactus">ABOUT US</div>
            <div className="cu2">
              Live Life Headphones which is an event planning company that provides an innovative experience to those of all ages while using music, lighting, and wireless technology.
            </div>
            </div>
            </div>
               <div className="middle2">
             <div className="phrase5a">
                   <div className="contactusa">ABOUT US</div>
            <div className="cu2a">
                            Live Life Headphones which is an event planning company that provides an innovative experience to those of all ages while using music, lighting, and wireless technology.

            </div>
           
            </div>
          </div>
           <div className="bottom">
        <div className="bottomleft">
              <div className="BLT"/>
             <div className="BLB">
                <Link className= "knot" to="/">
                
                  <i class="far fa-caret-square-right"></i>
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
                
                  <i class="far fa-circle"></i>
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
                  <i class="fas fa-circle"></i>
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

export default tabtwo;
