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
            
                <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Silent-Party-Alibi-5202018"> 5/20 Alibi Atlanta
                      <img src="https://photos.smugmug.com/Silent-Party-Alibi-5202018/i-fncmwLF/0/c8007938/X3/IMG_1578-X3.jpg" className="gallery">
                   </img>
                    </a>
                    <a className="gallery">
                        </a>
                     <a className="gallery">
                        </a>
                     <a className="gallery">
                        </a>
                     <a className="gallery">
                        </a>
                     <a className="gallery">
                        </a>
                     <a className="gallery">
                        </a>
                    <div className="gallery4">
                  <Link className="knot2" to="/tabtwo">
                      <i class="fas fa-arrow-circle-left"></i>
                   </Link>
                    <Link className="knot2" to="/tabtwob">
                      <i class="fas fa-arrow-circle-right"></i>
                </Link>
                </div>
                 
            </div>
              <div className="phrase4">
            <div className="Live">PHOTOS</div>
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
                  <i class="fas fa-caret-square-right"></i>
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
                <a className="BB" href = "https://twitter.com/ILiveLifeSilent"> TWITTER </a>
              </div>
           </div>
    
       
     
      </div>

    );
  }
}

export default tabtwo;