import React from "react";
import Products from "./section/Products"
import Details from "./section/Details"
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'

class Section extends React.Component{
  render(){
    return (
      <section>
        <Route path="/product" exact component={Products}/>
        <Route path="/product/:id" component={Details}/>
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment}/>
      </section>
    )
  }
}

export default Section;
