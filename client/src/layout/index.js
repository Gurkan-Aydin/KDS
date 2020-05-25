import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import employee from '../images/employee.svg'
import statu from '../images/statu.svg'
import criteria from '../images/criteria.png'


export class index extends Component {

    constructor(props) {
        super(props);

        this.getEmployee();
        this.getCriterion();
        this.getStatu();

    }
    state = {
        currentAdmin: JSON.parse(localStorage.getItem('currentAdmin')),
        employee: JSON.parse(localStorage.getItem('employee')),
        statu: JSON.parse(localStorage.getItem('statu')),
        criterion: JSON.parse(localStorage.getItem('criterion')),
    }
    

    deleteLocal = () => {
        localStorage.clear();
    }

    getEmployee = async() => {
        const response = await fetch(`/api/employee/getByAdminId/${this.state.currentAdmin.loggedAdmin.id}`);
        const data = await response.json();
        localStorage.setItem('employees', JSON.stringify(data))
    }
    
     getStatu =async () => {
        const response = await fetch(`/api/statu/getByAdminId/${this.state.currentAdmin.loggedAdmin.id}`);
        const data = await response.json();
        localStorage.setItem('statu', JSON.stringify(data))
    }
    
     getCriterion = async() => {
        const response = await fetch(`/api/criterion/getByAdminId/${this.state.currentAdmin.loggedAdmin.id}`);
        const data = await response.json();
        localStorage.setItem('criterion', JSON.stringify(data))
    }


    render() {
        console.log(this.state)
        return (
            <div>
                {
                    (this.state.currentAdmin === null) ? window.location.reload(false) : 
                     <div className="center60">
                       
                        <div className="col3">
                            <Link to="/employee">
                                <img src={employee} alt="employee" />
                                <h4><i>EMPLOYEES</i></h4>
                            </Link>
                        </div>
                        <div className="col3">
                            <Link to="/statu">
                                <img src={statu} alt="statu" />
                                <h4><i>STATU</i></h4>
                            </Link>
                        </div>
                        <div className="col3">
                            <Link to="/criteria">
                                <img src={criteria} alt="criteria" />
                                <h4><i>CRITERIA</i></h4>
                            </Link>
                        </div>
                    </div>
                }
             
            </div>


        )
    }
}

export default index
