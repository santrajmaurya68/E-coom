import React, { useEffect, useState }  from "react";
import {Link} from "react-router-dom"
const CatagoryList =()=>{
    const [Catagory,setCatagory]= useState([]);
    useEffect(()=>{
   getCatagory()
    }, [])
 const getCatagory = async () =>{
    console.log("1")
    let result = await fetch('http://localhost:5000/catagories');
 result = await result.json();
 setCatagory(result); 
}
const deleteCatagory = async (CatagoryId) =>{
    console.log(CatagoryId)
    let result = await fetch(`http://localhost:5000/categorydelete/${CatagoryId}` , {
        method : "Delete"
    });
    result = await result.json()
    if(result){
      getCatagory();
    }
}

console.log("Catagory" , Catagory);
    return(
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                <li>Sr . number </li> 
                <li>CategoryName</li>
                <li>Opration</li>
            </ul>
            {
                Catagory.map((item ,index)=>
                <ul key={item._id}>
                    <li>{item.CategoryId}</li>
                    <li><Link to = {"/catgoes/"+item.CategoryId}>{item.CategoryName}</Link></li>

                    <li><button onClick={()=>deleteCatagory(item.CategoryId)}>Delete</button>
                    <Link to = {"/updateCatagory/" + item.CategoryId}>Update</Link>
                    </li>
                    {/* update see */}
                </ul>
                )
            }

        </div>
    )
}
export default CatagoryList