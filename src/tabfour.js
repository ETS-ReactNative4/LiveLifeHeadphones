import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class tabtwo extends Component {
  render() {
    return (
      <div className="App">
     
         <div className="top">
      
          <Link className="topright" to = "/">
          </Link>
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
            <div className="pic3">
               <div className="H3">MAY
                <div className="BD">19 Alibi</div>
               <div className="BD">25 Aurum  Atlanta</div>

                <div className="BD">30 Live Oak Houston </div>

              </div>
               <div className="H3">JUNE
                <div className="BD"> 2 Encore </div>
                <div className="BD"> 9 Tribeca  Augusta </div>
                <div className="BD"> 21 Golden Glide  Atlanta </div>

              </div>
               <div className="H3">JULY
                <div className="BD"> Coming Soon...</div>
              </div>
            
              
            </div>
              <div className="phrase4">
            <div className="Live">CALENDAR</div>
            <div className="Live"></div>
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
                  <i class="fas fa-caret-square-right"></i>
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

export default tabtwo;