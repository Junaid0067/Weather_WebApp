import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
 
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/expense" element={<ExpenseTracker/>}  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
