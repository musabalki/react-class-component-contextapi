import React from "react"

export const DataContext=React.createContext();

export class DataProvider extends React.Component{
    state={
        products:[
            {
                "_id":"1",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },

            {
                "_id":"2",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"3",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"4",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"5",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"6",
                "title":"nike",
                "src":"test",
                "description":"açıklama",
                "content":"detay",
                "price":23,
                "colors":["red","black","crimson","teal"],
                "count":1
            },
        ]
    }
    render (){
        const {products}=this.state;
        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
