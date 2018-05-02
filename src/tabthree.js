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
              <p className="home"> Home </p>
              <p> About Us </p>
              <p className="BuyTix"> Buy Tickets </p>

          </div>
        </div>

          <div className="middle">
          
        <div className="midright">

          <div className="howto"> WEDDINGS</div>
           <div className="howto"> PROMS</div>
            <div className="howto"> PARTIES</div>
             <div className="howto"> CONCERTS</div>
          
        
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

export default tabtwo;