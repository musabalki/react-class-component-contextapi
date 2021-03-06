import React from "react";
import {Link} from "react-router-dom"
import {DataContext} from "../Context"

class Products extends React.Component {
  static contextType=DataContext;

  render() {
    const {products,addCart}=this.context;
    return (
      <div id="product">
          {
            products.map(product=>(
              <div className="card" key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <img src="/img/product.jpg" />
                </Link>
                <div className="content">
                  <h3>
                    <Link to={`/product/${product._id}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <span>{product.price}</span>
                  <p>{product.description}</p>
                  <button onClick={()=>addCart(product._id)}>Add to card</button>
                </div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default Products;
