import React, { Component } from 'react';
import decode from 'jwt-decode';


export class AuthServices extends Component {

    constructor(domain){
        super()
        this.domain= domain || `http://localhost:8080`;
        this.fetch=this.fetch.bind(this);
        this.login=this.login.bind(this);
        this.getProfile=this.getProfile.bind(this);
    }

    login = (email,password) => {

        return this.fetch(`${this.domain}/login`,{
            method:'POST',
            body:JSON.stringify({
                email,
                password
            })
        })
        .then(res=>{
            this.setToken(res.token);
            return Promise.resolve(res);
        })

    }

    fetch = (url,option) => {
        const headers = {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
        if(this.loggedIn())
            headers['Authorization']=`Bearer ${this.getToken()}`
            return fetch(url ,{
                headers,
                ...option
            })
            .then(this._checkstatus)
            .then(response=>response.json())
    }

    getToken =() => {
        return localStorage.getItem('id_token');
    }

    setToken = (idToken) => {
        return localStorage.setItem('id_token',idToken);
    }
    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.istokenexpired(token);
    }

    istokenexpired = (token) => {
        try {
            const decoded = decode(token);
            if(decode.exp < Date.now()/1000){
                return true;
            }
            else {
                return false;
            }
        }
        catch(e){
            return false;
        }
    }

    logout = () =>{
        return localStorage.removeItem('id_token')
    }

    getProfile = () => {
        return decode(this.getToken())
    }

    _checkstatus = (response) =>{
        if(response.status > 200 && response.status<300)
            return response
        else {
            let error = new Error(response.statusText);
            error.response=response;
            throw error
        }
    }
}

export default AuthServices