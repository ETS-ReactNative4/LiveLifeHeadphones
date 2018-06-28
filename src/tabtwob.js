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
                    
                 
                      <a className="gallery" href ="https://livelifeheadphones.smugmug.com/52818-With-Holiday"> 5.28 Dj Holiday Atlanta
                      <img src="https://photos.smugmug.com/52818-With-Holiday/i-bJdDQmw/0/49be024c/XL/5.28.18%20With%20DjHoliday%20Extended%202%20min%20%28%40ItsJusDarren%29-XL.jpg" className="gallery">
                        </img>
                    </a>
                      <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Live-Oak-May-30/"> 5.30 Live Oak Houston
                      <img src="https://photos.smugmug.com/Live-Oak-May-30/i-hrqBW4w/0/82e12e91/M/IMG_0217-M.jpg" className="gallery">
                        </img>
                    </a>
                      <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Encore-Lounge-6218"> 6.2 Encore Atlanta
                      <img src="https://photos.smugmug.com/Encore-Lounge-6218/i-7FZQ45s/0/f26b57b8/X3/IMG_1616-X3.jpg" className="gallery">
                        </img>
                    </a>
                         <a className="gallery" href ="https://livelifeheadphones.smugmug.com/UGA-5518/"> 6.5 UGA Athens
                      <img src="https://photos.smugmug.com/UGA-5518/i-r4WtnF4/0/b18e8b8a/L/31%20%281%20of%201%29-L.jpg" className="gallery">
                        </img>
                    </a>
                         <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Silent-Headphone-Party-Alibi-6918"> 6.9 Alibi Rooftop Atlanta
                      <img src="https://photos.smugmug.com/Silent-Headphone-Party-Alibi-6918/i-bPmd5GP/0/b829593b/XL/IMG_1735-XL.jpg" className="gallery">
                        </img>
                    </a>
                         <a className="gallery" href ="https://livelifeheadphones.smugmug.com/TrapB-Augusta-6918/"> 6.9 Trap&B Augusta
                      <img src="https://photos.smugmug.com/TrapB-Augusta-6918/i-zjvC338/0/6487e98f/M/1%20%281%20of%201%29-M.jpg" className="gallery">
                        </img>
                    </a>
                       <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Golden-Glide-Skating-Rink-Silent-Headphone-Party-62118/"> 6.21 Golden Glide Atlanta
                      <img src="https://photos.smugmug.com/Golden-Glide-Skating-Rink-Silent-Headphone-Party-62118/i-scGxg9G/0/97c51eac/M/IMG_2638-M.jpg" className="gallery">
                        </img>
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