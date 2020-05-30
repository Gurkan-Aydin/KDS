import React, { Component } from 'react';
import logo from '../images/taiLogo.png'
import '../css/login.css'
import { Link } from 'react-router-dom'


export default class Logo extends Component {
    render() {
        const { link } = this.props
        return (

            <div>
                <Link to={link} > <img src={logo} className="center" alt="logo" /> </Link>

            </div>

        )
    }
}
