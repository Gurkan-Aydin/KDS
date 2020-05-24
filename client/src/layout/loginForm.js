import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


export class loginForm extends Component {
    state = {

        username: "gurk",
        password: "123",
        message: "",
        redirect: false,
        admins: [{
            id: "-",
            name: "-",
            lastname: "-",
            username: "-",
            mail: "-",
            password: "-"
        }]
    };


    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/index' />
        }
    }

    loginValid = async () => {
        let input = { username: this.state.username, password: this.state.password }
        const response = await fetch(`/api/admin/getByUsername/${input.username}`)
        const admins = await response.json();
        if (admins.length === 0) {
            this.setState({ message: "wrong username", redirect: false });
        } else {
            for (let admin of admins) {
                let inputPassword = input.password;
                let password = admin.password;

                if (password !== inputPassword) {
                    this.setState({ message: "wrong password", redirect: false });
                } else {
                    this.setState({ message: "", redirect: true });
                    localStorage.setItem('current', JSON.stringify({ loggedAdmin: admin, isValid: true }));
                }
            }
        }
    };

    render() {
        const { username, password, message } = this.state
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
                <button id="loginButton" className="formCenter" onClick={this.loginValid}> Login </button>
                <h6 className="formCenter" id="message" onChange={this.changeInput} >{message}</h6>
                <hr />
                <br />
                <Link className="formCenter" to="/signup" > Sign Up </Link>
                <br />
                <Link className="formCenter" to="/forgatpass" > Forgat Password </Link>
                {this.renderRedirect()}
            </div>

        );
    }
}

export default loginForm














