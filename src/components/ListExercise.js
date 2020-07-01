import React, {useState, useEffect} from 'react';
import '../App.css';

function ListExercises() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [exercises, setItems] = useState([]);


    const fetchItems = async ()=>{
        const data = await fetch('http://localhost:5000/exercises');
        const exercises = await data.json();
      
        setItems(exercises);
    };
// function handleChange(event){
//     // event.preventDefault();
//     // console.log(event.target.value);
//     return event.target.value;
// }
  return (
    <div className="App">
        <div className="custom-form">
            {/* <select onChange={handleChange}> */}
            <select >
                {exercises.map(item =>(                
                    <option key={item._id} value={item.title} >{item.title}</option>                
                ))}
            </select>     
        </div>   
    </div>
  );
}

export default ListExercises;