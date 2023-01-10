import { useEffect, useState } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Add from './myPages/Add';
import Home from './myPages/Home';
import Update from './myPages/update';

function App() {
  const [meals,setMeals] =useState([])
 useEffect(() => {
const fetchMeals = async() => {
  try{
const res = await axios.get('http://localhost:8800/delicacies')

  setMeals(res.data)

  }
    
  
  catch(err){
console.log(err)
  }
}
fetchMeals()
 },[])
  return (
    <div className="App">
     
         <BrowserRouter>
         <Routes>
         <Route path ='/' element= {<Home meals={meals}/>} />
         <Route path ='/Add' element= {<Add />} />
         <Route path ='/update/:id' element= {<Update />} />

         </Routes>
        

         </BrowserRouter>
      
    </div>
  );
}

export default App;
