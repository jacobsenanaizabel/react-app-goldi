import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from '../main/main'
import Listcompanies from '../list-companies/listcompanies'
import Discovery from '../discovery/discovery'
import Company from "../company/company"


const RouteConfig = () => (
    <Router>
      <div>
      <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top'>
        <div className='collapse navbar-collapse'>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/discovery">Discovery</Link></li>
                <li className="nav-item"><Link  className="nav-link" to="/list">List Companies</Link></li>
            </ul>
        </div>
        </nav>      
        <Route exact path="/" component={Main} />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  );
const routes = [
    {
        path: "/list",
        component: Listcompanies
    },
    {
        path: "/discovery",
        component: Discovery
    },
    {
        path: "/company",
        component: Company
    }
]

const RouteWithSubRoutes = route => (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
)
  
export default RouteConfig;
