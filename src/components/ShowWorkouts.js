import React, {useState, useEffect} from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import jwt_decode from "jwt-decode";

var user="";

if(localStorage.getItem("jwtToken") != null){
var b = localStorage.getItem("jwtToken");
//console.log(b);
const decoded = jwt_decode(b);
// console.log(decoded);
user = decoded.name;
// console.log(user);

}else{
  user="No user";  
}


function ShowWorkouts() {
    useEffect(()=>{
        fetchItems();
    },[]);
const [exercises, setItems] = useState([]);

async function handleDelete(event){
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete?")){
      // alert("great");
    // console.log("the link was clicked");
    const url = 'http://localhost:5000/workouts/'+event.target.value;
    // console.log(event.target.value); 
    await fetch(url, {
        method: 'delete'

      });        
      fetchItems();  
    }       
}

    const fetchItems = async ()=>{
      if(localStorage.getItem("jwtToken") == null){
        window.location.replace("/login");
      }
        const data = await fetch('http://localhost:5000/workouts/getby/' + user);
        const exercises = await data.json();        
        setItems(exercises);
    }
  return (
    <div className="App">
      <div className="custom-table">
        <h1 id="title">Show Workouts</h1>
      <div className="scroll-table">
<Table striped bordered hover variant="light">
  <thead className="thead-dark">
    <tr>
      
      <th>Name</th>
      <th>Duration</th>
      <th>Date</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
  </thead>

  <tbody>
  {exercises.map(item =>(
    
    <tr>
      
      <td>{item.title}</td>
      <td>{item.length}</td>
      <td>{item.date.toString().slice(0,10) +" at: " + item.date.toString().slice(11,19) }</td>
      <td><button className="btn btn-primary" value={item._id} onClick={handleDelete}>Delete</button></td>
      <td><button className="btn btn-primary" value={item._id} ><a id="buttonLink" href={'/editworkout/'+item._id}>Edit</a></button></td>
    </tr>
    ))} 
  </tbody>
</Table>
          </div>
          </div>   
              
    </div>
  );
}

export default ShowWorkouts;
