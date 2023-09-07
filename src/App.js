import './App.css';
import NavBar from './Components/NavBar';
import {Route,Routes} from "react-router-dom"
import Home from "./Components/Home"
import AddProduct from "./Components/AddProduct"

function App() {
  return (
    <div className="App">
     <NavBar/>

     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/' element={<AddProduct/>} />
     </Routes>
    </div>
  );
}

export default App;
