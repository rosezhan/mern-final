
import React from 'react';
import jwt_decode from "jwt-decode";



var name="";

if(localStorage.getItem("jwtToken") != null){
var b = localStorage.getItem("jwtToken");
// console.log(b);
const decoded = jwt_decode(b);
name = decoded.name;
// console.log(name);
}else{
  name="No User";  
}


class CreateWorkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
      this.state = {length: ''};
      this.state = {data: []};
        
      // this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeLength = this.handleChangeLength.bind(this);      
      this.handleSelect = this.handleSelect.bind(this);      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {

        if(localStorage.getItem("jwtToken") == null){
          window.location.replace("/login");
        }
      await fetch('http://localhost:5000/exercises')
        .then(response => response.json())
        .then(data => this.setState({ data }));
        

    }

    // handleChangeTitle(event) {
    //   this.setState({title: event.target.value});   
    // }

    handleChangeLength(event) {
        
      this.setState({length: event.target.value});       
      
    }

    handleSelect(event){
      // console.log(event.target.value);
      this.setState({title: event.target.value}); 
    }
    
    async handleSubmit(event) {
      // alert('An exercise was submitted: ' + this.state.title);
      event.preventDefault();
       await fetch('http://localhost:5000/workouts', {
        method: 'post',
        // mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            "title": this.state.title,
            "length": this.state.length,
            "user": name          
        })
      });

      this.setState({title: ''});     
      this.setState({length: ''});  
      window.location.href = "/showworkouts";  
      
    }
    
    render() {
      
      return (       
        <div className="custom-form">
          <h1>Create Workout</h1>
          <div className="custom-input">
          <form onSubmit={this.handleSubmit}>
            <select className="custom-input-field" style={{textAlign:"center",margin:"0 auto",paddingLeft:"25px"}} id="select" onChange={this.handleSelect}>
              {this.state.data.map(item =>(                
                <option key={item._id} value={item.title} >{item.title}</option>                
              ))}
            </select> 
            <input className="custom-input-field" type="text" value={this.state.length} placeholder="Duration (min)" onChange={this.handleChangeLength} required />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form> 
        </div>       
      </div>
      );
    }
  }

  export default CreateWorkout;
