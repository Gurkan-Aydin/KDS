import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Logo from '../components/logo'


export class signupForm extends Component {
    state = {
        name: "name",
        lastname: "lname",
        username: "uname",
        password: "pass",
        question: "",
        answer: ""

    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addAdmin = async () => {
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
            <div>
                <Logo link="/"/>
                <div style={{ maxWidth: "40%", marginLeft: "30%", marginTop: "20px" }}>
                    <hr />

                    <input className="formCenter form-control form-control-user" type="text" id="name" placeholder="name" value={name} onChange={this.changeInput} />

                    <input className="formCenter form-control form-control-user" type="text" id="lastname" placeholder="Lastname" value={lastname} onChange={this.changeInput} />
                    <input className="formCenter form-control form-control-user" type="text" id="username" placeholder="Username" value={username} onChange={this.changeInput} />
                    <input className="formCenter form-control form-control-user" type="password" id="password" placeholder="Password" value={password} onChange={this.changeInput} />
                    <input className="formCenter form-control form-control-user" type="text" id="question" placeholder="Question" value={question} onChange={this.changeInput} />
                    <input className="formCenter form-control form-control-user" type="text" id="answer" placeholder="Answer" value={answer} onChange={this.changeInput} />
                    <button className="btn btn-primary btn-user btn-block" id="signupButton" onClick={this.addAdmin}> Sign Up </button>
                    <hr />
                    <Link className="" to="/login"> Login </Link>
                    <br />
                    <Link className="" to="/forgatpass"> Forgat Password </Link>
                </div>
            </div>


        )
    }
}

export default signupForm


