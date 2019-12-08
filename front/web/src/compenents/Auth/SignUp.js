import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <form>
               
             
            <div className="form-group">
                <label> Nom :  </label>
                <input type="text" className="form-control" id="lastname" />
             </div> 

             <div className="form-group">
                <label> Prenom :  </label>
                <input type="text" className="form-control" id="firstname" />
             </div>

             <div className="form-group">
              <label >Email address:</label>
              <input type="email" className="form-control" id="email" />
            </div>

             <div className="form-group">
              <label >Numéro de téléphone:</label>
              <input type="text" className="form-control" id="phonenumber" />
            </div>

            <div className="form-group">
              <label >Mot de passe:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>

            <div className="form-group">
              <label >Confirmer le mot de passe:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>

            
            <button type="submit" className="btn btn-default">Inscrie</button>
          
            </form>
        )
    }
}

export default SignUp
