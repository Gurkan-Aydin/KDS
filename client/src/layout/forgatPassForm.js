import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class forgatPassForm extends Component {

    state = {
        mail: ''
    }

   

    changeInput = (e) => {
        this.setState({ 
            [e.target.id]: e.target.value
        })
    }

    render() {
        const {mail} = this.state
        return (
            <div className="center">
            <hr/>
            <input className="formCenter" type="mail" id="mail" placeholder="Mail" value={mail} onChange={this.changeInput}/>

            <hr/>
            <button className ="formCenter"  id="loginButton"> Send Me Email </button>
            <br/>
            <Link className="formCenter" to ="/login"> Login </Link>
            <br/>
            <Link className="formCenter" to ="/signup"> Sign Up </Link>
        </div>
        )
    }
}

export default forgatPassForm


