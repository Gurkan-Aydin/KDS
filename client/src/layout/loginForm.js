import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Logo from '../components/logo'


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

    getData = async (adminId) => {
        const responseE = await fetch(`/api/employee/getByAdminId/${adminId}`);
        const dataE = await responseE.json();
        localStorage.setItem('employee', JSON.stringify(dataE))

        const responseS = await fetch(`/api/statu/getByAdminId/${adminId}`);
        const dataS = await responseS.json();
        localStorage.setItem('statu', JSON.stringify(dataS))

        const responseC = await fetch(`/api/criterion/getByAdminId/${adminId}`);
        const dataC = await responseC.json();
        localStorage.setItem('criterion', JSON.stringify(dataC))

        return true;
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
                    localStorage.setItem('currentAdmin', JSON.stringify({ loggedAdmin: admin, isValid: true }));

                    let a = await this.getData(JSON.parse(localStorage.getItem('currentAdmin')).loggedAdmin.id);
                    if (a === true) this.setState({ message: "", redirect: true });
                }
            }
        }
    };

    render() {
        const { username, password, message } = this.state
        return (
            <div>
                <Logo link="/"/>
                <div style={{ maxWidth: "40%", marginLeft: "30%", marginTop: "20px" }}>
                    <hr />
                    <input id="username"
                        className="formCenter form-control form-control-user"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={this.changeInput} />



                    <input id="password"
                        className="formCenter form-control form-control-user"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.changeInput} />

                    <button id="loginButton" className="btn btn-primary btn-user btn-block" onClick={this.loginValid}> Login </button>
                    <h6 className="formCenter" id="message" onChange={this.changeInput} >{message}</h6>
                    <hr />
                    <Link className="formCenter" to="/signup" > Sign Up </Link>
                    <br />
                    <Link className="formCenter" to="/forgatpass" > Forgat Password </Link>
                    {this.renderRedirect()}
                </div>

            </div>


        );
    }
}

export default loginForm














