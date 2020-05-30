import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userImg from '../images/users.png'
import { Redirect } from 'react-router-dom'
import ChangeAdmin from './changeAdmin'


export default class adminBar extends Component {

    state = {
        currentAdmin: JSON.parse(localStorage.getItem('currentAdmin')),
        redirect: false,
    }

    logout = () => {
        localStorage.clear();
        /* this.setState({
            redirect : true,
        }) */
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    render() {
        let adminImage = this.state.currentAdmin.loggedAdmin.image;
        const { name, lastname } = this.state.currentAdmin.loggedAdmin;
        if (adminImage === null) adminImage = userImg;
        return (
            <div className="row no-gutters ">
                {this.renderRedirect()}
                <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top  "
                    style={{ width: "100%", marginTop: "20px" }}>
                    <div className="col no-gutters text-right">
                    <ChangeAdmin action="password"/>
                    </div>
                    <div className="col no-gutters text-right" style={{ maxWidth: "200px", marginTop: "20px" }}>
                        <div className="nav-item dropdown no-arrow" style={{ right: "auto" }}>
                            <Link className="nav-link dropdown-toggle" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{ fontSize: '100%' }}> {name} {lastname}</span>
                                <img className="img-profile rounded-circle" src={userImg} alt="logo" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <Link className="dropdown-item" to="/">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Change Username
                            </Link>
                                <Link className="dropdown-item" to="/">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Change Name or Lastname
                            </Link>
                                <div className="dropdown-item" onClick={() => {return <ChangeAdmin action="password"/>}}>
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Change Password
                            </div>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/login" onClick={this.logout()} >
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout

                            </Link>
                            </div>
                        </div>
                    </div>

                </nav>

            </div>

        )
    }
}
