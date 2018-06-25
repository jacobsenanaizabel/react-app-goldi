import React, { Component } from 'react'
import axios from 'axios'

const URL = 'https://stage-api.gldi.co/api/v1'


export default class Main extends Component {

    componentDidMount(){    
         axios.get(`/api/v1/company`, { crossdomain: true } )
         .then(res => {
           const persons = res.data;
           console.log(res);
         }) 
    }

    render() {
        return(
            <div className="container home-container">
                <div className="text-welcome">
                    <h1>Gold Company</h1>
                    <h2>KNOW US BETTER</h2>
                </div>
            </div>
        )
    }
}