import React, { useEffect } from "react";
import {DataContext} from "../Context"
import {Link} from "react-router-dom"
class Details extends React.Component {
  state ={
    products:[]
  }
  getProduct = ()=>{
    if(this.props.match.params.id){
      const res=this.context.products;
      const data=res.filter(item=>item._id===this.props.match.params.id)
      this.setState({products:data})
    }
    else{
      console.log("error")
    }
  }
  componentDidMount(){
    this.getProduct();
  }
  static contextType = DataContext;
  render() {
   
    return (
      <div>
         {
           this.state.products.map((product)=>(
             <div className="details" key={product._id}>
               <img src={product.src} alt="" />
               <div className="box">
                  <div className="row">
                    <h2>{product.title}</h2>
                    <span>${product.price}</span>
                  </div>
                  <p>
                  {
                    product.colors.map(color=>(<button style={{background:color,height:"30px",width:"30px",borderRadius:"50%",border:"1px solid #333",margin:"4px",cursor:"pointer"}} key={color}></button>))
                  }
                  </p>
                  <p>{product.description}</p>
                  <p>{product.content}</p>
                  <Link to="/cart" className="cart">
                    Add to cart
                  </Link>
               </div>
             </div>
           ))
         }
      </div>
    )
  }
}

export default Details;
