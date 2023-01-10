import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Update = () => {
    const [order,setOrder] = useState({
        food:'',
        meat:'',
        drink:''
    })
    const navigate = useNavigate()
    const locateMe = useLocation()
const locateId = locateMe.pathname.split('/')[2]
console.log(locateId)
const handleChange = (e) => {
setOrder((prev) => ({...prev, [e.target.name] : e.target.value}))
}


const handleClick = async(e) => {
    e.preventDefault();
   
    try{
await axios.put('http://localhost:8800/delicacies/'+ locateId, order)
navigate('/')
}
catch(err) {
    console.log(err)
}
}


    return ( 
        <div className="inputdiv">
            <h3>Food</h3>
            <input 
            type='text' name='food' onChange={handleChange} />
            <br></br><br /><br />
            <h3>Meat</h3>
            <input type='text' name='meat' onChange={handleChange} />
            <br /><br /><br />
            <h3>Drink</h3>
            <input type='text' name='drink' onChange={handleChange} />
            <br /><br /><br />
            <button onClick={handleClick}>submit</button>
        </div>
     );
}
 
export default Update;
