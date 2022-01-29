import React,{Component} from "react";
import SingleProduct from "./SingleStudent/SingleStudent";
class Products extends Component{
    state = {
        students: [
            {
                firstName: "Peter",
                lastName: "Parker",
                age: 21,
                id: 1
            },
            {
                firstName: "Tony",
                lastName: "Stark",
                age: 34,
                id: 2
            },
            {
                firstName: "Steve",
                lastName: "Rogers",
                age: 198,
                id: 3
            },
            {
                firstName: "Bruce",
                lastName: "Banner",
                age: 18,
                id: 4
            },

        ]
    }
    render() {
        return(
            <div
                style={
                    {
                        width:400,
                        margin: 'auto',
                        paddingTop: '20px',
                        textAlign: 'center'
                    }
                }>
                <h1>Products</h1>
                {
                    this.state.students.map(
                        (item, index) =>{
                            return(
                                <SingleProduct
                                    key={index}
                                    id = {item.id}
                                    firstName={item.firstName}
                                    lastName={item.lastName}
                                    age={item.age}
                                />
                            )
                        }
                    )
                }
            </div>

        )
    }
}

export default Products