import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class newPassword extends Component {
    state = {
        message: "",
        password: "",
        rePassword: "",
        redirect: false
    }

    updatePassword = async () => {
        if (this.state.password === this.state.rePassword) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: this.props.username, type: 'password', value: this.state.password })
            };
            await fetch('/api/admin/update', requestOptions);
            this.setState({
                redirect: true
            })
        } else {
            this.setState({ message: "Password not match" })

        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { message, password, rePassword } = this.state
        return (
            <div style={{maxWidth: "40%", marginLeft: "30%", marginTop: "20px"}}>
                <input className="formCenter form-control form-control-user" type="text" id="password" placeholder="New Password" value={password} onChange={this.changeInput} />
                <input className="formCenter form-control form-control-user" type="text" id="rePassword" placeholder="Re- New Password" value={rePassword} onChange={this.changeInput} />
                <button className="btn btn-primary btn-user btn-block" id="changePass" onClick={this.updatePassword}> Change Password </button>
                <h6 className="formCenter" id="message" onChange={this.changeInput} >{message}</h6>

                {this.renderRedirect()}
            </div>
        )
    }
}

