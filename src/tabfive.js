import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class tabtwo extends Component {
  render() {
    return (
      <div className="App">
     
         <div className="top">
      <Link className="topright" to ="/">
          </Link>
         
          <div className="tab">
              <p> Home </p>
              <p> About Us </p>
              <p className="BuyTix"> Buy Tickets </p>

          </div>
        </div>
        <div className="middle">
              <div className="phrase5">
                   <div className="contactus">CONTACT US</div>
            <div className="cu2">If you have any ideas or projects that you would like to discuss, get in touch with us</div>
           
            </div>
          <div className="pic5">
             <div className="Name">NAME :
                <input className="Namebox"></input>
             </div>
            <div className="Email">EMAIL :
                 <input className="Emailbox"></input>
            </div>
                <div className="Message">MESSAGE :
                 <input className="Messagebox"></input>
                </div>
                <button className="button"> SEND </button>
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
          </Link>
          <Link className= "knot"  to="/tabfive">
            <i class="fas fa-minus"></i>
            <i class="fas fa-angle-double-up"></i>
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