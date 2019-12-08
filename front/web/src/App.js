import React,{Component} from 'react';
import Users from './compenents/users/Users';
import Navbar from './compenents/partials/Navbar';
import Footer from './compenents/footer/Footer';
import Home from './compenents/home/Home';
import Login from './compenents/Auth/Login';
import SignUp from './compenents/Auth/SignUp';
import Hairstyle from './compenents/services/Hairstyle';
import { Link, BrowserRouter, Route,Redirect } from 'react-router-dom';
import WithAuth from './compenents/Auth/WithAuth';
import AuthServices from './compenents/services/AuthServices'
import './App.css';

const Auth = new AuthServices();


// <Home />
// <Navbar/>




class App extends Component {
render (){
  return (
   

    


    
      <div className="App">
         <BrowserRouter>
            <nav className="navbar navbar-inverse">
             
            <div className="container-fluid">
                <div className="navbar-header">
                <Link className="navbar-brand" to="/">HomeBeauty</Link>
                </div>
                <ul className="nav navbar-nav">
                <li >
                  <Link to="/Hairstyle">Coiffure</Link>
                </li>

                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              
                </ul>
                <ul className="nav navbar-nav navbar-right">
              
                    <li><Link to ="/SignUp"><span className="glyphicon glyphicon-user"></span> Inscrie </Link></li>
                    <li><Link to ="/Login"><span className="glyphicon glyphicon-log-in"></span> Connexion</Link></li>
                </ul>
            </div>
        
            </nav> 
       
      
          <div className="container mt-2">
          <Route path="/" exact component={Home} />
            <Route path="/Login"  component={Login} />
            <Route path="/SignUp"  component={SignUp} />
            <Route path="/Hairstyle"  component={Hairstyle} />
          </div>
        </BrowserRouter>

      </div>
    
  );

}

 /*
  onClick={this.handleLogout.bind(this)} 
 
 handleLogout = () =>{

    Auth.logout();
    
      <Redirect to="/login" />
    
    //this.props.history.replace('/login');
 
  }*/
}

export default App;
