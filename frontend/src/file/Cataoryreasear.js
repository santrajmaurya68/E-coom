import React, { useEffect, useState }  from "react";
import {Link} from "react-router-dom"
import {useParams } from 'react-router-dom'
const Cataoryreasear =()=>{
    const [products,setProducts]= useState([]);
    const params = useParams() ;
    useEffect(()=>{
   getProducts()
    }, [])
 const getProducts = async () =>{
    console.log("shhs")
    let result = await fetch(`http://localhost:5000/catagories/${params.id}`);
 result = await result.json();
 setProducts(result); 
}
const deleteProduct = async (ProductId) =>{
    console.log(ProductId)
    let result = await fetch(`http://localhost:5000/productdelete/${ProductId}` , {
        method : "Delete"
    });
    result = await result.json()
    if(result){
      getProducts();
    }
}

console.log("products" , products);
    return(
        <div className="product-list">
            <h2>Catagory List</h2>
            <ul>
                <li>Sr . number </li> 
                <li>ProductName</li>
                <li>CategoryName</li>
                <li>CategoryId</li>
                <li>Opration</li>
            </ul>
            {
                products.map((item ,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.ProductName}</li>
                    <li>{item.CategoryName}</li>
                    <li>{item.CategoryId}</li>

                    <li><button onClick={()=>deleteProduct(item.ProductId)}>Delete</button>
                    <Link to = {"/updateProducts/" + item.ProductId}>Update</Link>
                    </li>

                </ul>
                )
            }

        </div>
    )
}
export default Cataoryreasear