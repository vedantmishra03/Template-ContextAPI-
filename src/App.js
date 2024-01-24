
import './App.css';
import {AppContext} from "./Context/AppContext";
import { useContext } from 'react';
 
 

function App() {

    // similarly i can use the context data any whare in any component where it is needed
    
  const {name,setName}= useContext(AppContext); 

  return (
    <>
       APP
    </>
  );
}

export default App;
