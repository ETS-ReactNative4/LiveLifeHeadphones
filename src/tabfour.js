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
          <div className="tab">
              <p> Home </p>
              <p> About Us </p>
              <p className="BuyTix"> Buy Tickets </p>

          </div>
        </div>

          <div className="middle">
               <div className="pic3">
                <div className="gallery2">
                     <div className="UE1">
                   </div>
                    </div>
                <div className="gallery2">
                      <div className="UE2">
                   </div>
                    </div>
                <div className="gallery2">
                      <div className="UE1">
                   </div>
                    </div>
                <div className="gallery2">
                      <div className="UE2">
                   </div>
                    </div>
            </div>
              <div className="phrase4">
            <div className="Live">UPCOMING</div>
            <div className="Live">EVENTS</div>
            </div>
         
        </div>

            <div className="bottom">
             <div className="bottomleft">
             
       <Link className= "knot" to="/">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabtwo">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabthree">
            <i class="fas fa-minus"></i>
          </Link>
          <Link className= "knot"  to="/tabfour">
            <i class="fas fa-minus"></i>
            <i class="fas fa-angle-double-up"></i>
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

export default tabtwo;