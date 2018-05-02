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
              <div className="video-container">
              {/* <video  width="1150" height="400" controls>
                <source  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  type="video/mp4" />
                  Your browser does not support the video tag.
              </video> */}
               {/* <iframe className=" KF" src="https://archive.org/embed/KFDrop.mp4" width="840" height="400" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe> */}
               <iframe className="KF"src="https://player.vimeo.com/video/267442392?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen="true" allowfullscreen></iframe>
               </div>

        
            </div> 

             

           </div>
           <div className="bottom">
             <div className="bottomleft">
             
          <Link className= "knot" to="/">O</Link>
          <Link className= "knot"  to="/tabtwo">O</Link>
          <Link className= "knot"  to="/tabthree">O</Link>
          <Link className= "knot"  to="/tabfour">O</Link>
          <Link className= "knot"  to="/tabfive">O</Link>
  
     

        
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
