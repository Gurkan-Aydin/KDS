import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminConsumer from '../contexts/adminContext'
import axios from 'axios'

export class loginForm extends Component {
    state = {
        username: "gurk",
        password: "123"
    }

    


    checkLogin = (admins, dispatch, e) => {
       dispatch({ type:"getAdminByUsername" , payload: this.state.username});
       console.log({admins})
       for(let admin of admins){
           if (admin.getPassword === "-"){
           console.log("not include username");
       }else if (admin.getPassword !== this.state.password){
           console.log("wronfg password");
       }else{
           axios.get("/")
       }
       }
       

    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    
    render() {
        const { username, password } = this.state
        return (
            <AdminConsumer >
                {
                    value => {
                        const {admins, dispatch} = value;
                        return (
                            <div className="center" >
                                <hr />
                                <input id="username"
                                    className="formCenter"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={this.changeInput} />
                                <br />
                                <input id="password"
                                    className="formCenter"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.changeInput} />
                                <hr />
                                <button id="loginButton" className="formCenter"  onClick={this.checkLogin.bind(this, admins, dispatch)}> Login </button>
                                <br />
                                <Link className="formCenter" to="/signup" > Sign Up </Link>
                                <br />
                                <Link className="formCenter" to="/forgatpass" > Forgat Password </Link>
                            </div>

                        )
                    }
                }

            </AdminConsumer>

        )
    }
}

export default loginForm














