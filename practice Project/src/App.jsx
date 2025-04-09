import {  useState } from "react";
import Home from './components/home.jsx';
import './App.css';
export default function App() {
    const [userName , setUserName] = useState("");
    const [showChild , setShowChild] = useState(false);
    
      function nextPage(){
        setShowChild(true); 
      }
      
return(
    <div>
        <h1>Welcome ,We Hope you are having a good day!</h1>
        <input type="text" placeholder="Enter Name " onChange={(e) =>setUserName(e.target.value)}></input>
        <button onClick={nextPage}>Submit</button>
        
        {showChild &&<Home name={userName}/>}
       {/* was missing a wrapper for condition.*/}
      
      
        
    </div>
    
)
}
  
