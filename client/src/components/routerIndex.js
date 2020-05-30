import React, { Component } from 'react'
import Login from '../layout/loginForm'
import Signup from '../layout/signupForm'
import Forgat from '../layout/forgatPassForm'
import Index from '../layout/index'
import Employee from '../pages/employee'
import Statu from '../pages/statu'
import Criterion from '../pages/criterion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export class login extends Component {



    render() {
        return (
            <Router >
                <div className = "user">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/forgatpass" component={Forgat} />
                    <Route path="/index" component={Index} />
                    <Route path="/employee" component={Employee} />
                    <Route path="/statu" component={Statu} />
                    <Route path="/criterion" component={Criterion} />
                    <Route component={Login}/>  
                </Switch>

                </div>
            </Router>



        )
    }
}

export default login
