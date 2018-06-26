import React from 'react'
import axios from 'axios'

import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Listcompanies extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            companies : []
        }
    }

    componentDidMount() {
        axios.get(`/api/v1/company`, { crossdomain: true } )
        .then(response => {
            this.setState({companies : response.data.results})
        }) 
    }

    render() {
        return(               
                <div className='card-list'>
                        { this.state.companies.map(company => 
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{company.name}</h4>
                                    <h6 className="card-subtitle mb-2 text-muted">{company.location}</h6>
                                    <p className="card-text">{company.about}</p>
                                    <button type="button" className="btn btn-secondary">
                                    <Link to={{
                                            pathname: '/company',
                                            state: { company: company.id }}}>Detail about the company </Link>
                                    </button>
                                </div>
                            </div>                    
                        ) }
                </div>
        )
      }
}
