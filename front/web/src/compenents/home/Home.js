import React, { Component } from 'react';
import cfd from '../../image/cfd.png';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
export class Home extends Component {

    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col">
                        Presentaion de l'entete de la page
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <div className="text-center">
                       <h2>-- Nos services --</h2>
                       _______________________
                       
                       </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="text-center">
                            <h4>Coiffeur à domicil</h4> 
                       </div>
                        <img src={cfd} className="img-thumbnail" />
                        <h5 className="text-justify">
                        
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            bbbbbbbbbbbbbbbb
                            ccccccccccccccccccccccc
                            ddddddddddddddddddddd
                            eeeeeeeeeeeeeeeeee
                           
                        </h5>
                    </div>

                    <div className="col-sm-3">
                        <div className="text-center">
                            <h4>Menage</h4>
                        </div>
                        
                        <img src={cfd} className="img-thumbnail"/>
                        <h5 className="text-justify">
                        
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            bbbbbbbbbbbbbbbb
                            ccccccccccccccccccccccc
                            ddddddddddddddddddddd
                            eeeeeeeeeeeeeeeeee
                           
                        </h5>
                    </div>

                    <div className="col-sm-3">
                        <div className="text-center">
                            <h4>Massage</h4> 
                        </div>
                      
                       <img src={cfd} className="img-thumbnail"/>
                       <h5 className="text-justify">
                       aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                       bbbbbbbbbbbbbbbb
                       ccccccccccccccccccccccc
                       ddddddddddddddddddddd
                       eeeeeeeeeeeeeeeeee

                       </h5>
                    </div>

                    <div className="col-sm-3">
                        <div className="text-center">
                            <h4>Beauty</h4>
                        </div>
                        
                        <img src={cfd} className="img-thumbnail"/>
                        <h5 className="text-justify">
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        bbbbbbbbbbbbbbbb
                        ccccccccccccccccccccccc
                        ddddddddddddddddddddd
                        eeeeeeeeeeeeeeeeee

                        </h5>
                    </div>
                </div>
        </div>
        )
    }
}

export default Home


