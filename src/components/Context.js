import React from "react"

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },

            {
                "_id": "2",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "nike",
                "src": "/img/product.jpg",
                "description": "açıklama",
                "content": "detay",
                "price": 23,
                "colors": ["green", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        cart: [],
        total:0
    }
    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        }
        else{
            /*const data = products.filter(cart => {
                if(cart._id === id){
                    this.setState({...cart,count:cart.count++})
                }
            })*/
        }
    }
    increase=(id)=>{
        const {cart}=this.state;
        cart.map(item=>{
            if(item._id===id){
                item.count+=1
            }
        })
        this.setState({cart:cart})
        this.getTotal();
    }
    reduction=(id)=>{
        const {cart}=this.state;
        cart.map(item=>{
            if(item._id===id){
                item.count===1 ? item.count =1:item.count-=1
            }
        })
        this.setState({cart:cart})
        this.getTotal();
    }
    removeProduct=id=>{
        const {cart}=this.state;
        const data = this.state.cart.filter(item=>{
            if(item._id!==id){
                return item;
            }
        })
        this.setState({cart:data})
        this.getTotal();
    }
    getTotal=()=>{
        const res = this.state.cart.reduce((prev,item)=>{
            return prev +(item.price*item.count)
        },0) 
        this.setState({total:res})
    }
    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
    };
    componentDidMount(){
        const dataCart=JSON.parse(localStorage.getItem('dataCart'))
        console.log(JSON.parse(localStorage.getItem('dataCart')))

        if(dataCart!==null){
            this.setState({cart:dataCart})
        }
        
        const dataTotal=JSON.parse(localStorage.getItem('dataTotal'))
        if(dataTotal!==null){
            this.setState({total:dataTotal})
        }
    }
    render() {
        const { products, cart,total} = this.state;
        const { addCart,reduction,increase,removeProduct,getTotal } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart,reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
