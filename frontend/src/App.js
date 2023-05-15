import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navgation from './file/Navgation';
import AddProduct from './file/AddProducts';
import Footer from './file/Footer';
import ProductList from './file/ProductList';
import UpdateProduct from './file/UpdateProduct';
import AddCategory from './file/AddCatagory';
import CatagoryList from './file/CatagoryList';
import UpdateCatagory from './file/UpdateCatagory';
import Cataoryreasear from './file/Cataoryreasear';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navgation/>
      <Routes>
        <Route path='/'element={<ProductList />} />
        <Route path='/catagory'element={<CatagoryList />} />
        <Route path='/addCatagory' element={<AddCategory/>} />
        <Route path='/addProducts'element={<AddProduct/>} />
        <Route path='/updateProducts/:id'element={<UpdateProduct/>} />
        <Route path='/updateCatagory/:id'element={<UpdateCatagory/>} />
        <Route path='/catgoes/:id' element={Cataoryreasear}/>
	    </Routes>
      <Footer/> 
      </BrowserRouter>

    </div>
  );
}

export default App;
