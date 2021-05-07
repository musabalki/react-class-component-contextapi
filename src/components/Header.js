import {Link} from "react-router-dom"
import React from "react";
import {DataContext} from "./Context"

class Header extends React.Component{
  state={
    toggle:false
  }
  menuToggle=()=>{
    console.log(this.state.toggle)
    this.setState({toggle:!this.state.toggle})
    //console.log(this.state.toggle)
  }
  static contextType=DataContext;
  render(){
    const {cart}=this.context;
    return (
      <header>
          <div className="menu" onClick={this.menuToggle}>
                Menu
          </div>
          <div className="logo">
                <h1><Link to="">Nike</Link></h1>
          </div>
          <nav>
              <ul className={this.state.toggle ? 'toggle': ''}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/product">Product</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li className="close" onClick={this.menuToggle}>X</li>
                  
              </ul>
              <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">CARD</Link>
              </div>
          </nav>
      </header>
    )
  }
}

export default Header;
