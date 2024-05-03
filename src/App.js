import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './app/Shop'
import Product  from './Component/Product';
import Cart from './Component/Cart';
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import { BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';


function App() {
  return (
    <div className="App">


      <Router>
        <NavBar/>
       
        <Routes>
        
        <Route path='/product' element={ <Product/>}/>
        <Route path='/cart' element={ <Cart />}/>
        <Route path='/login' element={ <Login/>}/>
        </Routes>
     </Router>
      
    
     
    </div>
  );
}

export default App;
