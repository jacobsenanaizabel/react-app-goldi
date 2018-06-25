import React from 'react'
import axios from 'axios'

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
                                <a href="#" className="card-link">Detail about the company</a>
                            </div>
                        </div>                    
                    ) }
            </div>
        )
      }
}
