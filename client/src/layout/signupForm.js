import {Link} from 'react-router-dom'
import React, { Component } from 'react'


export class signupForm extends Component {
    state = {
        name: "",
        lastname: "",
        mail: "",
        username: "",
        password: ""

    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

 

    render() {
        const { name, lastname, mail, username, password } = this.state;
        
        return (
            <div className="center">
            <hr/>
            
            <input className="" type="text" id="name" placeholder="name" value={name} onChange={this.changeInput}/> 
            
            <input className="" type="text" id="lastname" placeholder="Lastname" value={lastname} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="mail" id="mail" placeholder="Mail" value={mail} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="text" id="username" placeholder="Username" value={username} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="password" id="password" placeholder="Password" value={password} onChange={this.changeInput}/>
            <hr/>
            <button className ="formCenter"  id="signupButton"> Sign Up </button>
            <br/>
            <Link className="formCenter" to ="/login"> Login </Link>
            <br/>
            <Link className="formCenter" to ="/forgatpass"> Forgat Password </Link>
        </div>
        )
    }
}

export default signupForm


