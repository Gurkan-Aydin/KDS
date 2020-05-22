import React, { Component } from 'react'
import Logo from '../components/logo'
import Login from '../layout/loginForm'
import Signup from '../layout/signupForm'
import Forgat from '../layout/forgatPassForm'
import Index from '../layout/index'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'

export class login extends Component {
 

    render() {
        return (
            <Router >
                <div>
                    
                    <Logo /> 
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/forgatpass" component={Forgat} />
                        <Route path="/index" component={Index} />
                        <Route component={Login} />
                    </Switch>   
                    
                    
                </div>
            </Router>
          
        )
    }
}

export default login
