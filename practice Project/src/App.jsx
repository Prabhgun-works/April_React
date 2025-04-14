import {  useState } from "react";
// import Home from './components/home.jsx';
// import Notifications from "./components/Notifications.jsx";
// import Form from "./components/FormHandle.jsx";
import {useSelector , useDispatch} from 'react-redux';
import './App.css';

export default function App() {
    // const [userName , setUserName] = useState("");
    // const [showChild , setShowChild] = useState(false);
    
    //   function nextPage(){
    //     setShowChild(true); 
    //   }
    const count  = useSelector(state => state.count) ;
    const dispatch = useDispatch(); 
      
return(
    <div>
        {/* <h1>Welcome ,We Hope you are having a good day!</h1>
        <input type="text" placeholder="Enter Name " onChange={(e) =>setUserName(e.target.value)}></input>
        <button onClick={nextPage}>Submit</button>
        
        {showChild &&<Home name={userName}/>}
        <Notifications/>
       {/* was missing a wrapper for condition.*/}
      <h2>Redux Counter</h2>
      <h3>Count : {count}</h3>
        <button onClick={()=> dispatch({type : 'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=> dispatch({type : 'DECREMENT'})}>DECREMENT</button>
          <button onClick ={()=> dispatch ({type : 'RESET'})}> RESET </button>
    </div>
    
)
}
  
