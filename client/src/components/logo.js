import React from 'react'
import logo from '../images/taiLogo.png'
import '../css/login.css'
import {Link} from 'react-router-dom'
 
export default function centerIcon() {
    return (
                
        <div>
             <Link to={"/index"} > <img src={logo} className="center" alt="logo" /> </Link>
        </div>
    )
}
