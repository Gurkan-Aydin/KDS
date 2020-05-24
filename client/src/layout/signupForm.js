import {Link} from 'react-router-dom'
import React, { Component } from 'react'


export class signupForm extends Component {
    state = {
        name: "name",
        lastname: "lname",
        username: "uname",
        password: "pass",
        question:"", 
        answer:""

    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

     addAdmin = async() => {    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ admin: this.state })
        };
        await fetch('/api/admin/add', requestOptions);
        this.props.history.push("/login");

    }
 

    render() {
        const { name, lastname, username, password, question, answer } = this.state;
        
        return (
            <div className="center">
            <hr/>
            
            <input className="formCenter" type="text" id="name" placeholder="name" value={name} onChange={this.changeInput}/> 
            
            <input className="formCenter" type="text" id="lastname" placeholder="Lastname" value={lastname} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="text" id="username" placeholder="Username" value={username} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="password" id="password" placeholder="Password" value={password} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="text" id="question" placeholder="Question" value={question} onChange={this.changeInput}/>
            <br/>
            <input className="formCenter" type="text" id="answer" placeholder="Answer" value={answer} onChange={this.changeInput}/>
            <hr/>
            <button className ="formCenter"  id="signupButton" onClick={this.addAdmin}> Sign Up </button>
            <br/>
            <Link className="formCenter" to ="/login"> Login </Link>
            <br/>
            <Link className="formCenter" to ="/forgatpass"> Forgat Password </Link>
        </div>
        )
    }
}

export default signupForm


