import {useState} from 'react'

const AddCategory = () => {
   // const[ProductId , setProductId] = useState()
  //  const[ProductName , setProductName] = useState('')
    const[CategoryName , setCategoryName]= useState('')
   // const[CategoryId , setCategoryId]=useState('')
     const [error , setError] = useState('');
    const addproduct = async () =>{
        console.log( CategoryName);
       const userId = JSON.parse(localStorage.getItem('user'))._id;
       console.log(userId)
       if( !CategoryName ){
        setError(true) 
        return false
    }
       let result = await fetch("http://localhost:5000/addcategory" , {
        method : 'post',
        body: JSON.stringify({ CategoryName}),
        headers : {
            "Content-Type" : "application/json"
        }
       });
       result = await result.json();
      console.log(result)
    }
    return (
        <div>
            <h1>Add Category</h1>
            <input type="text" placeholder='Enter Category Name' className='inputboxoneaddproduct' 
           onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName} />
                                 {error && !CategoryName && <span>Enter valid description</span>}
            <button className='signupbtnone' type='button' onClick={addproduct}>Add Product</button>
        </div>
    )
}
export default AddCategory

