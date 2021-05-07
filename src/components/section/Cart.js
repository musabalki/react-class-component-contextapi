import React from "react";
import { Link } from "react-router-dom"
import { DataContext } from "../Context"

class Cart extends React.Component {
  static contextType = DataContext;
  componentDidMount(){
    this.context.getTotal()
  }
  render() {
    const { cart, reduction, increase,removeProduct,total,getTotal } = this.context;
    return (
      <div>
        {
          cart.map((product) => (
            <div className="details cart" key={product._id}>
              <img src={product.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{product.title}</h2>
                  <span>${product.price*product.count}</span>
                </div>
                <p>
                  {
                    product.colors.map(color => (<button style={{ background: color, height: "30px", width: "30px", borderRadius: "50%", border: "1px solid #333", margin: "4px", cursor: "pointer" }} key={color}></button>))
                  }
                </p>
                <p>{product.description}</p>
                <p>{product.content}</p>
                <div className="amount">
                  <button className="count" onClick={() => increase(product._id)}>+</button>
                  <span>{product.count}</span>
                  <button className="count" onClick={() => reduction(product._id)}>-</button>
                </div>
              </div>
              <div className="delete" onClick={()=>removeProduct(product._id)}>
                  X
              </div>
            </div>
          ))
        }
        {cart.length>0 ? <div className="total">
          <Link to="/payment">
            Payment
          </Link>
          <h3>Total:${total}</h3>
        </div> : <h3>Sepetiniz boş</h3>}
      </div>
    )
  }
}

export default Cart;
