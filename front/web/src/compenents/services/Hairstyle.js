import React, { Component } from 'react';
import homme from '../../image/homme.png';
import femme from '../../image/femme.png';
import enfant from '../../image/children.jpg';
import axios from 'axios';
class Hairstyle extends Component {
    constructor(){
        super();
        axios.get(`http://localhost:8080/services/type/HAIR`)
        .then(res => {
         // const hairetype = res.data;
          this.setState({ hairetype:res.data });
        
          console.log(res.data)
        })

        this. state ={
            varH:0,
            varF:0,
            varE:0,
            hairetype:[],
            disabled:true
        };
    }
   
   

      handelchange =() =>{
          if(this.state.varH>0){
            this.setState({
                    disabled:false
             })
          }
      }

    decrementH = () => {
        this.setState({
           
                 varH:this.state.varH -1
               
           
        });
        
    }

    incrementH = () => {
        this.setState({
          
                varH:this.state.varH +1
         
        });


    }

    decrementF = () => {
        this.setState({
          
                varF:this.state.varF -1
        
        });
    }

    incrementF = () => {
        this.setState({
           
                varF:this.state.varF +1
           
        });
    }

    decrementE = () => {
        this.setState({
           
                varE:this.state.varE -1
           
        });
    }

    incrementE = () => {
        this.setState({
           
                varE:this.state.varE +1
           
        });
    }
    render() {
     /*  const data = [
            {
              category: 'Homme',
              products: [
                { id: 0, name: 'Shampoo', price: '8',image:'assets/Coiffure/shamp.jpg' },
                { id: 1, name: 'Barbe', price: '5',image:'assets/Coiffure/barbe.jpg' }
              ]
            },
            {
              category: 'Femme',
              products: [
                { id: 2, name: 'Miche', price: '8',image:'assets/Coiffure/miche.jpg' },
                { id: 3, name: 'Macciage', price: '6',image:'assets/Coiffure/makeup.jpg' }
              ]
            },
            {
              category: 'Enfant',
              products: [
                { id: 4, name: 'Coupe Normal', price: '8',image:'assets/Coiffure/coupenormal.jpg' },
                { id: 5, name: 'Coupe avec quelque chose', price: '5',image:'assets/Coiffure/degradê-com-listra.jpg' },
                { id: 6, name: 'Coupe ', price: '8',image:'assets/Coiffure/coupenormal.jpg' }
              ]
            }
          ];*/
        return (
            <div className="row">
           

                
                 <div className="col-sm-10">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2>-- Comment ça marche --</h2>
                             _______________________
                            
                        </div>

                    </div>
                </div>
               
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center">
                            <h4>
                                Tapez un text de description
                            </h4>
                           
                            
                        </div>

                    </div>

                    <div className="col-sm-6">
                        <div className="text-center">
                            <h4>
                                coller une video de description ou quelque chose
                            </h4> 
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2>-- Presentation --</h2>
                           
                            
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="text-center">
                        <div >
                            <img src={homme} className="img-thumbnail"/>
                        </div>
                        <div>
                             <button type="button" disabled={this.state.disabled }  onClick={this.decrementH} className="btn btn-danger">-</button>
                                 {" " + this.state.varH + " "}
                            <button type="button" onClick={this.incrementH} onChange={this.handelchange} className="btn btn-success">+</button>
                        </div>
                       
                       <div>
                           <h4>Homme</h4>
                       </div>
                      
                      

                        {      
                            
                           this.state.hairetype.map(pos=>
                            
                            {
                             if(pos.name==="MEN"){
                                 let result="";
                                    for (let service of pos.services) {
                              
                                       result += <p>{service.id},{service.name} , {service.price}</p>;
                                    }
                                    console.log(result);
                                    return result; 
                                }
                                console.log(pos)
                            }
                            )
                        }
                        { console.log("1:",this.state.hairetype)}
                       
                       //
                        </div>

                    </div>

                    <div className="col-sm-4">
                        <div className="text-center">
                        <div >
                            <img src={homme} className="img-thumbnail"/>
                        </div>
                        <div>
                             <button type="button" onClick={this.decrementF} className="btn btn-danger">-</button>
                             {" " + this.state.varF + " "}
                            <button type="button" onClick={this.incrementF} className="btn btn-success">+</button>
                        </div>
                       
                       
                       <div>
                           <h4>Femme</h4>
                       </div>
                        </div>

                    </div>

                    

                    <div className="col-sm-4">
                        <div className="text-center">
                        <div >
                            <img src={homme} className="img-thumbnail"/>
                        </div>
                        <div>
                             <button type="button" onClick={this.decrementE} className="btn btn-danger">-</button>
                             {" " + this.state.varE + " "}
                            <button type="button" onClick={this.incrementE} className="btn btn-success">+</button>
                        </div>
                       
                       <div>
                           <h4>Enfant</h4>
                       </div>
                            
                            
                            
                        </div>

                    </div>
                </div>
                    <div id="man">
                            
                    </div>

                    <div id="female">

                    </div>

                    <div id="children">

                    </div>

                </div>
            <div className="col-sm-2">
                blalalalalal
            </div>
                
              
        </div>
        )
    }
}

export default Hairstyle
