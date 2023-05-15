import {useEffect, useState } from 'react'
import {useParams , useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
  const[ProductId , setProductId] = useState()
  const[ProductName , setProductName] = useState('')
  const[CategoryName , setCategoryName]= useState('')
  const[CategoryId , setCategoryId]=useState('')
   const params = useParams() ;
   const navigate = useNavigate()
   useEffect(()=>{
    getProductDetails();
   } , [])
  
const getProductDetails = async () =>{
  console.log("1")
    console.log("hj"+ JSON.stringify(params))
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    console.log("2")
    result = await result.json() ;
    console.log(result)
  //  console.log(result.book_name)
  setProductId(result.ProductId)
  setProductName(result.ProductName)
  setCategoryName(result.CategoryName)
  setCategoryId(result.CategoryId)
    console.log("3")
}

    const Updateproduct = async () =>{
       // console.log(book_name , author_name , quantity , page);
       console.log("4")
    let result = await fetch(`http://localhost:5000/productupdate/${params.id}`,{
    method : 'Put' ,
    body: JSON.stringify({ProductId,ProductName,CategoryName,CategoryId}),
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
            <input type="text" placeholder='Enter product id' className='inputboxoneaddproduct'
            onChange={(e)=>setProductId(e.target.value)} value={ProductId} />
            <input type="text" placeholder='Enter product name' className='inputboxoneaddproduct'
          onChange={(e)=>setProductName(e.target.value)} value={ProductName}   />
            <input type="text" placeholder='Enter product description' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName} />
            <input type="text" placeholder='Enter product long_Description' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryId(e.target.value)} value={CategoryId} />
           
            <button className='signupbtnone' type='button' onClick={Updateproduct}>Update Product</button>
        </div>
    )
}
export default UpdateProduct
