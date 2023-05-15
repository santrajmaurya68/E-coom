import {useEffect, useState } from 'react'
import {useParams , useNavigate} from 'react-router-dom'

const UpdateCatagory = () => {
  const[CategoryName , setCategoryName]= useState('')
   const params = useParams() ;
   const navigate = useNavigate()
   useEffect(()=>{
    getCatagoryDetails();
   } , [])
  
const  getCatagoryDetails = async () =>{
  console.log("1")
    console.log("hj"+ JSON.stringify(params))
    let result = await fetch(`http://localhost:5000/catagories/${params.id}`)
    console.log("2")
    result = await result.json() ;
    console.log(result)
  //  console.log(result.book_name)
 // setCategoryId(result.CategoryId)
  setCategoryName(result.CategoryName)
    console.log("3")
}

    const Updatecatagory = async () =>{
       // console.log(book_name , author_name , quantity , page);
       console.log("4")
    let result = await fetch(`http://localhost:5000/categoryupdate/${params.id}`,{
    method : 'Put' ,
    body: JSON.stringify({CategoryName}),
   headers : {
    'Content-Type' : "application/json"
   }
      });
      result = await result.json() ;
      console.log(result)
      console.log("5")
      navigate('/')
    }
    return (
        <div>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product description' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName} />
            <button className='signupbtnone' type='button' onClick={Updatecatagory}>Update Product</button>
        </div>
    )
}
export default UpdateCatagory
