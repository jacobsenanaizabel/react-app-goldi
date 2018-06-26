import React from 'react'
import axios from 'axios'

export default class Company extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            company : [],
            companyChoose : this.props.location.state.company
        }
    }

    componentDidMount() {
        axios.get(`/api/v1/company/`+ this.state.companyChoose, { crossdomain: true } )
        .then(response => {
           this.setState({company : response.data})
            }
        )

    }

    render() {
        return(     
            <div className="card card-company">
                <img className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title">{this.state.company.name}</h4>
                    <p className="card-text">{this.state.company.location}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.state.company.size}</li>
                    <li className="list-group-item">{this.state.company.about}</li>
                </ul>
            </div>
        )
    }
}
