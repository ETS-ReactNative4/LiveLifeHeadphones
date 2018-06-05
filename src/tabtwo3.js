import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from 'react-router-dom';
import aboutus from './aboutus'

class tabtwo extends Component {
  render() {
    return (
      <div className="App">
     
         <div className="top">
      
          <Link className="topright" to = "/"></Link>
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
              <a className="BuyTix" href ="https://www.eventbrite.com/o/live-life-headphones-16549205162"> Buy Tickets </a>
            </div>
          </div>
              <div className="bar"/>
          </div>
        </div>

          <div className="middlea">
               <div className="pic3">
            
   
                    <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Silent-skate-Party"> Skate Party Atlanta
                      <img src="https://photos.smugmug.com/Silent-skate-Party/i-DZnCgGt/0/bc31c1fc/XL/MVI_1355-XL.jpg" className="gallery">
                   </img>
                    </a>
                    <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Trap---B---AUG-5-5/"> 5.5 Trap and B Augusta
                      <img src="https://photos.smugmug.com/Trap---B---AUG-5-5/i-5H5R4Qz/0/5e281bf6/M/DSC_0553-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Silent-Party-Alibi-5518/"> 5.5 Alibi Atlanta
                      <img src="https://photos.smugmug.com/Silent-Party-Alibi-5518/i-2c83kGz/0/1300b292/M/IMG_1112-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Live-Oak-4-25-18/"> 4.25 Live Oak Houston
                      <img src="https://photos.smugmug.com/Live-Oak-4-25-18/i-tcbSjjv/0/f52e42d2/M/DSC_0051-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Aurum-Lounge-Silent-Party-41418/"> 4.14 Aurum Atlanta
                      <img src="https://photos.smugmug.com/Aurum-Lounge-Silent-Party-41418/i-njKHZnn/0/2552d406/M/IMG_0909-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://livelifeheadphones.smugmug.com/ATL-Silent-Party-Encore-Lounge-31718/"> 3.17 Encore Atlanta
                                           <img src="https://photos.smugmug.com/ATL-Silent-Party-Encore-Lounge-31718/i-9gq8sF6/0/1712d74a/M/IMG_0591-M.jpg" className="gallery">
                   </img>
                    </a>
                         <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Orange-Crush-2k18/"> 4.21OrangeCrushSavannah
                                           <img src="https://photos.smugmug.com/Orange-Crush-2k18/i-hztjSjM/0/6c7c00a4/M/IMG_5693-M.jpg" className="gallery">
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
        <div className = "middle3a">
            <div className="phrase4abd">
                <div className="contactusc">PHOTOS</div>
                <div className="Live"></div>
              
            </div>
                    <div className="pic3bacd">
            
             <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Orange-Crush-2k18/"> 4.21OrangeCrushSavannah
                                           <img src="https://photos.smugmug.com/Orange-Crush-2k18/i-hztjSjM/0/6c7c00a4/M/IMG_5693-M.jpg" className="gallery5">
                   </img>
                    </a>

                      <a className="gallery" href ="https://livelifeheadphones.smugmug.com/Silent-Party-Alibi-5202018"> 5/20 Alibi Atlanta
                      <img src="https://photos.smugmug.com/Silent-Party-Alibi-5202018/i-fncmwLF/0/c8007938/X3/IMG_1578-X3.jpg" className="gallery5">
                   </img>
                    </a>
                   
             
                   
                      <div className="gallery6">
                  <Link className="knot2" to="/tabtwo2">
                      <i class="fas fa-arrow-circle-left"></i>
                   </Link>
                    <Link className="knot2" to="/tabtwo3">
                      <i class="fas fa-arrow-circle-right"></i>
                </Link>
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
                    <div className="BLT2"/>

           <div className="BLB2">
                <Link className="BLC" to="/tabtwo"> GO </Link>

                <Link className= "knot" to="/">
                
                  <i class="far fa-circle"></i>
                </Link>
                <Link className= "knot"  to="/tabtwo">
                  <i class="fas fa-circle"></i>
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

export default tabtwo;