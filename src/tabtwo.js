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
            
                <a className="gallery" href ="https://jesserobinson.smugmug.com/Orange-Crush-ItsJusDarren"> Orange Crush 
                      <img src="https://photos.smugmug.com/Orange-Crush-ItsJusDarren/New-folder/i-gvBcvrX/0/240bd05e/X2/2%20%281%20of%201%29-X2.jpg" className="gallery">
                   </img>
                    </a>
                    <a className="gallery" href ="https://jesserobinson.smugmug.com/Future-CEO/"> Future CEO 
                      <img src="https://photos.smugmug.com/Future-CEO/i-PMwLhnx/0/6e6d42d0/M/Future%20CEO-9723-M.jpg" className="gallery">
                   </img>
                    </a>
                    <a className="gallery" href ="https://jesserobinson.smugmug.com/Silent-skate-Party"> Silent Skate Party
                      <img src="https://photos.smugmug.com/Silent-skate-Party/i-DZnCgGt/0/bc31c1fc/XL/MVI_1355-XL.jpg" className="gallery">
                   </img>
                    </a>
                    <a className="gallery" href ="https://jesserobinson.smugmug.com/Trap---B---AUG-5-5/"> Augusta Trap and B 
                      <img src="https://photos.smugmug.com/Trap---B---AUG-5-5/i-5H5R4Qz/0/5e281bf6/M/DSC_0553-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://jesserobinson.smugmug.com/Silent-Party-Alibi-5518/"> Silent Party Alibi 
                      <img src="https://photos.smugmug.com/Silent-Party-Alibi-5518/i-2c83kGz/0/1300b292/M/IMG_1112-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://jesserobinson.smugmug.com/Live-Oak-4-25-18/"> Live Oak 
                      <img src="https://photos.smugmug.com/Live-Oak-4-25-18/i-tcbSjjv/0/f52e42d2/M/DSC_0051-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://jesserobinson.smugmug.com/Aurum-Lounge-Silent-Party-41418/"> Aurum Lounge
                      <img src="https://photos.smugmug.com/Aurum-Lounge-Silent-Party-41418/i-njKHZnn/0/2552d406/M/IMG_0909-M.jpg" className="gallery">
                   </img>
                    </a>
                     <a className="gallery" href ="https://jesserobinson.smugmug.com/ATL-Silent-Party-Encore-Lounge-31718/"> ATL Silent Party 
                      <img src="https://photos.smugmug.com/ATL-Silent-Party-Encore-Lounge-31718/i-9gq8sF6/0/1712d74a/M/IMG_0591-M.jpg" className="gallery">
                   </img>
                    </a>
                 
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
                <a className="BB" href = "https://twitter.com/Lawless_Ent"> TWITTER </a>
              </div>
           </div>
    
       
     
      </div>

    );
  }
}

export default tabtwo;