import React, { Component } from 'react'
import MainNav from '../components/mainNav'
import Logo from '../components/logo'


export default class criterion extends Component {
    render() {
        
        return (
            <div>
            <div style={{position: 'absolute', left: '-10%', maxWidth: '60%',}}>
                <Logo link="/index" />
            </div>
            <div style={{position: 'absolute', right: '10%', maxWidth: '60%',}}>
                <MainNav />
            </div>s
        </div>
        )
    }
}
