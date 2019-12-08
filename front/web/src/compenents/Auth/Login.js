import React, { Component } from 'react';
import AuthServices from '../services/AuthServices'
import Axios from 'axios';

export class Login extends Component {

 constructor(props){
 super(props)
 
  this.state={
    email:"",
    password:"",
    loginErrors:""
  };
 this.handleSubmit=this.handleSubmit.bind(this);
 this.handleChange=this.handleChange.bind(this);
}

handleChange(ev){
  this.setState({
    [ev.target.name]:ev.target.value
  });
}

  handleSubmit(ev) {

    const{email, password}=this.state;
    Axios
      .post("http://localhost:8080/login",
      {
      user: {
        email:email,
        password:password

      }
    },
    { withCredentials:true }
      )

    .then(response=>{
      console.log("res: ", response);
    })
    .catch(error=>{
      console.log("errors",error)
    });

    ev.preventDefault();
  }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >Address email:</label>
              <input type="email" className="form-control" id="email" value={this.state.email} name="email" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label >Mot de pass:</label>
              <input type="password" className="form-control" id="password" value={this.state.password} name="password" onChange={this.handleChange}/>
            </div>
            <div className="checkbox">
              <label><input type="checkbox" /> Remember me</label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
    
        )
    }
}

export default Login
