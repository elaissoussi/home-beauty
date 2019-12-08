import React, { Component } from 'react'

export class SearchUser extends Component {

    state={
        search:''
    }

    handlForm=(e)=>{
        this.setState({
            search: e.target.value
        })
    }

    searchUsers = (e) =>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
       
    }

    render() {
        return (
       
                <form onSubmit={this.searchUsers} className="form-group">
                 
                 
                        <input onChange={this.handlForm} value={this.state.search} placeholder="Search users..." id="Search" type="text" className="form-control"/>
                       <button className="btn btn-danger btn-block">Search</button>
                </form>
         
        )
    }
}

export default SearchUser
