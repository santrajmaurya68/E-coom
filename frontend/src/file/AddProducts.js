import {useState} from 'react'

const AddProduct = () => {
    const[ProductId , setProductId] = useState()
    const[ProductName , setProductName] = useState('')
    const[CategoryName , setCategoryName]= useState('')
    const[CategoryId , setCategoryId]=useState('')
     const [error , setError] = useState('');
    const addproduct = async () =>{
        console.log(ProductId, ProductName, CategoryName, CategoryId);
       const userId = JSON.parse(localStorage.getItem('user'))._id;
       console.log(userId)
       if(!ProductId || !ProductName || !CategoryName || !CategoryId ){
        setError(true) 
        return false
    }
       let result = await fetch("http://localhost:5000/addproduct" , {
        method : 'post',
        body: JSON.stringify({ProductId, ProductName, CategoryName, CategoryId}),
        headers : {
            "Content-Type" : "application/json"
        }
       });
       result = await result.json();
      console.log(result)
    }
    return (
        <div>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter product id' className='inputboxoneaddproduct'
            onChange={(e)=>setProductId(e.target.value)} value={ProductId} />
                                  {error && !ProductId && <span>Enter valid id</span>}
            <input type="text" placeholder='Enter product name' className='inputboxoneaddproduct'
          onChange={(e)=>setProductName(e.target.value)} value={ProductName}   />
                                {error && !ProductName && <span>Enter valid name</span>}
            <input type="text" placeholder='Enter Category Name' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName} />
                                 {error && !CategoryName && <span>Enter valid description</span>}
            <input type="text" placeholder='Enter Category Id' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryId(e.target.value)} value={CategoryId} />
                                 {error && !CategoryId && <span>Enter valid price</span>}
            
            <button className='signupbtnone' type='button' onClick={addproduct}>Add Product</button>
        </div>
    )
}
export default AddProduct

