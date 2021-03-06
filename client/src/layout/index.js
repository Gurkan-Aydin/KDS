import React, { Component } from 'react'
import MinNav from '../components/mainNav'
import { Redirect } from 'react-router-dom'
import Logo from '../components/logo'

export class index extends Component {

    state = {
        currentAdmin: JSON.parse(localStorage.getItem('currentAdmin')),

        isValid: false,
    }

    deleteLocal = () => {
        localStorage.clear();
    }


    getCurrentAdmin = async () => {
        let current = await JSON.parse(localStorage.getItem('currentAdmin'));
        this.setState({
            isValid: true
        })
        return current;
    }

    componentDidMount = async () => {
        if (this.state.currentAdmin !== null) this.setState({ isValid: true });

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/index' />
        }
    }



    render() {
        const { isValid } = this.state;
        return (

            <div style={{minHeight: "300px", position:"absolute"}}>
                <Logo link="/index" />
                {(isValid) ? <MinNav /> : <Redirect to='/index' />}
            </div>
        )
    }
}

export default index
