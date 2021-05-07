import React from "react";
import {Link} from "react-router-dom"
import {DataContext} from "../Context"

class Payment extends React.Component {
  static contextType=DataContext;

  render() {
    const {cart}=this.context;
    return (
      <div>
          <h2>Payment</h2>
      </div>
    )
  }
}

export default Payment;
