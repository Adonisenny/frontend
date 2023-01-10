import { Link } from "react-router-dom";

import axios from "axios";

const Home = ({meals}) => {
    const handleDelete = async(id) => {
        try{
        await axios.delete('http://localhost:8800/delicacies/'+id)
        window.location.reload()
    }catch(err){
        console.log(err)
    }}
    return ( 
        <div style={{'text-align':'center'}}>
            {meals.map((meal,i) => {
                return <div className="container" key={i}>
                    <div className="food">
                    <h3>Food</h3>
                    <p>{meal?.Food}</p>
                    </div>
                    <div className="meat">
                    <h3>Meat</h3>
                    <p>{meal.Meat}</p>
                    </div>
                    <div className="drink">
                    <h3>Drink</h3>
                    <p>{meal.drink}</p>
                    
                    </div>
                    <button onClick={() => handleDelete(meal.id)} >delete</button>
                    <button><Link to ={`/Update/${meal.id}`}>UPDATE</Link></button>
                    </div>
            })}
            <button><Link to='/Add'>submit</Link></button>
            

            
        </div>
     );
}
 
export default Home;
