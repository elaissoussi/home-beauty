import React, { Component } from 'react';
import AuthServices from '../services/AuthServices';
import  { Redirect,Route } from 'react-router-dom';

export default function WithAuth (AuthComponent){
  const auth = new AuthServices();
  return class AuthWrapped extends React.Component {
      constructor (){
          super();

        this.state = {
            user:null
        }

      }
          //return <Redirect to='/login'  />
         //this.props.history.replace('/login')
            //  return   <Route> <Redirect to='/login'  /> </Route>

      componentWillMount = () => {
          if(!auth.loggedIn()){
            this.props.history.replace('/login')
          }
          
    
          else {
              try{
                  const profile=auth.getProfile();
                    this.setState({
                        user:profile
                    })
              }
              catch(err){
                  auth.logout();
                 this.props.history.replace('/login')
               
              }
          }
      }

      render(){
          if(this.state.user){
              return (
                  <AuthComponent {...this.props} {...this.state} />
              )
          }
          else {
              return null;
          }
      }

  }
}


