
import NavBar from './Components/NavBar';
import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
import AddProduct from "./Components/AddProduct"
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <div className="App">
     <NavBar/>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/editProduct" element={<EditProduct/>}/>
     </Routes>
    </div>
  );
}

export default App;
