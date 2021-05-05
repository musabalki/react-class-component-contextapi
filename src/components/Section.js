import React from "react";
import Products from "./section/Products"
import Details from "./section/Details"
import {Route} from "react-router-dom"

class Section extends React.Component{
  render(){
    return (
      <section>
        <Route path="/product" exact component={Products}/>
        <Route path="/product/:id" component={Details}/>
      </section>
    )
  }
}

export default Section;
