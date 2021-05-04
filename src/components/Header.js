import {Link} from "react-router-dom"
import React from "react";

class Header extends React.Component{
  render(){
    return (
      <header>
          <div className="menu">
                Menu
          </div>
          <div className="logo">
                <h1><Link to="">Nike</Link></h1>
          </div>
          <nav>
              <ul>
                  <li><Link to="">Home</Link></li>
                  <li><Link to="">Product</Link></li>
                  <li><Link to="">Contact</Link></li>
                  <li><Link to="">About</Link></li>
                  <li><Link to="">Login</Link></li>
                  <li className="close">X</li>
                  
              </ul>
              <div className="nav-cart">
                    <span>0</span>
                    <Link to="/cart">CARD</Link>
              </div>
          </nav>
      </header>
    )
  }
}

export default Header;
