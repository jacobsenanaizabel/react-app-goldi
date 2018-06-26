import React from 'react'
import axios from 'axios'

export default class Discovery extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            discovery : []
        }
    }

    componentDidMount(){
        axios.get(`/api/v1/discover`, { crossdomain: true } )
             .then(response => {
                this.setState({discovery : response.data.results})
            }
        )
    }

    render() {
        return(     
            <div className='card-list'>
                { this.state.discovery.map(company => 
                    <div className="card">
                        <div className="card-header">
                            {company.title}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title"> {company.subtitle}</h4>
                            <p className="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</p>
                            <a href={company.video} className="btn btn-primary" disabled={company.video} required={company.video} >See the video</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
