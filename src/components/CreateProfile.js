import React from 'react';
import jwt_decode from "jwt-decode";



var user="";

if(localStorage.getItem("jwtToken") != null){
var b = localStorage.getItem("jwtToken");
//console.log(b);
const decoded = jwt_decode(b);
//console.log(decoded);
user = decoded.name;
// console.log(user);
}else{
  user="No Profile";  
}


class CreateProfile extends React.Component {
    constructor(props) {
      super(props);
      //this.state = {user: ''};
      this.state = {gender: ''};
      this.state = {age: ''};
      this.state = {city: ''}
  
      this.handleChangeGender = this.handleChangeGender.bind(this);
      this.handleChangeAge = this.handleChangeAge.bind(this);
      this.handleChangeCity = this.handleChangeCity.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeGender(event) {
      this.setState({gender: event.target.value});    
      
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});    
        
    }
    handleChangeCity(event) {
        this.setState({city: event.target.value});    
        
    }
    componentDidMount(){
        //alert(user);
      if(localStorage.getItem("jwtToken") == null){
        window.location.replace("/login");
      }
    }
    async handleSubmit(event) {
     
      event.preventDefault();
     
      await fetch('http://localhost:5000/profiles', {
        method: 'post',
        
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          "user": user,
          "gender": this.state.gender,
          "age": this.state.age,
          "city": this.state.city
          
        })
      });
      // console.log(result);
      
      this.setState({gender: ''});
      this.setState({age: ''});
      this.setState({city: ''});
     
      window.location.href = "/exercises";
      
    }
  
    render() {
      return (       
        <div className="custom-form">
          <h1>Create your REACTion21 profile</h1>
          <div className="custom-input">
          <form onSubmit={this.handleSubmit}>
            <input className="custom-input-field" id="gender" type="text" placeholder="Enter your gender" value={this.state.gender} onChange={this.handleChangeGender} required />
            <input className="custom-input-field" id="age" type="text" placeholder="Enter your age" value={this.state.age} onChange={this.handleChangeAge} required />
            <input  className="custom-input-field"id="city" type="text" placeholder="Enter your city" value={this.state.city} onChange={this.handleChangeCity} required />

            <input className="btn btn-primary" type="submit" value="Create" />
          </form> 
        </div>
        </div>
      );
    }
  }

  export default CreateProfile;
