import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import employeeImg from '../images/employee.svg'
import statuImg from '../images/statu.svg'
import criteriaImg from '../images/criteria.png'
import userImg from '../images/users.png'

export class MainNav extends Component {

    state = {
        employee: "",
        statu: "",
        criterion: "",

        employees: JSON.parse(localStorage.getItem('employee')),
        status: JSON.parse(localStorage.getItem('statu')),
        criteria: JSON.parse(localStorage.getItem('criterion')),

        employeeResponse: "",
        statuResponse: "",
        criterionResponse: "",

        employeeColor:"",
        statuColor:"",
        criterionColor:"",
    }

    search = (e) => {
        let list, input;
        if(e.target.value==="") {
            list =[];
            this.setState({
                [`${e.target.id}Color`]:"",
                [`${e.target.id}Response`]:""
            })
            return;
        }
        switch (e.target.id) {
            case "employee":
                list = this.state.employees;
                input = this.state.employee;
               
                if (list.length !== 0) {
                    console.log(this.state.employees)
                    this.setState({
                        [`${e.target.id}Color`]: "bg-white s py-2 collapse-inner rounded",
                        [`${e.target.id}Response`]: list.filter(person => person.name.includes(input)).map(filteredPerson => (
                            <Link to={`api/${e.target.id}/${filteredPerson.id}`} key={filteredPerson.id} style={{textColor:"red"}} className="collapse-item"> 
                                <li  key={filteredPerson.id} style={{textColor:"red"}} >   
                                  <img className="searchImg " src={(filteredPerson.image === null) ? userImg : filteredPerson.image}/>  {filteredPerson.name} {filteredPerson.lastname} 
                                </li>
                            </Link>     
                         
                        ))
                    })
                }
                return;
            case "statu":
                list = this.state.status;
                input = this.state.statu;
                break;
            case "criterion":
                list = this.state.criteria;
                input = this.state.criterion;
                break;
            default:
                list = this.state.criteria;
                break;
        }

        if (list.length !== 0) {
            this.setState({
                [`${e.target.id}Color`]: "bg-white s py-2 collapse-inner rounded",
                [`${e.target.id}Response`]: list.filter(person => person.name.includes(input)).map(filteredPerson => (
                    <Link to={`api/${e.target.id}/${filteredPerson.id}`} key={filteredPerson.id} style={{textColor:"red"}}> 
                        <li  key={filteredPerson.id} style={{textColor:"red"}} >   
                           {filteredPerson.name} 
                        </li>
                    </Link>     
                 
                ))
            })
        }
    }

    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };

    render() {
        const { employee, statu, criterion, employeeColor, criterionColor, statuColor} = this.state
        return (
            <div  style={{maxWidth: "70%", marginLeft: "15%", marginTop: "20px"}}>

                <div className="col3">
                    <Link to="/employee">
                        <img src={employeeImg} alt="employee" />
                        <h4><i>EMPLOYEES</i></h4>
                    </Link>
                    <input id="employee" type="text" className="search formCenter form-control " placeholder="Search.." value={employee} onChange={this.changeInput} onKeyUp={this.search} />
                    <br/>
                    <div className={employeeColor}  >
                        <ul >{this.state.employeeResponse}</ul>
                    </div>
                        
                    
                   
                </div>
                <div className="col3">
                    <Link to="/statu">
                        <img src={statuImg} alt="statu" />
                        <h4><i>STATU</i></h4>
                    </Link>
                    <input id="statu" type="text" className="search formCenter form-control " placeholder="Search.." value={statu} onChange={this.changeInput} onKeyUp={this.search} />
                    <br/>
                    <div className={statuColor}>
                         <ul >{this.state.statuResponse}</ul>
                    </div>
                   
                </div>
                <div className="col3">
                    <Link to="/criteria">
                        <img src={criteriaImg} alt="criteria" />
                        <h4><i>CRITERIA</i></h4>
                    </Link>
                    <input id="criterion" type="text" className="search formCenter form-control " placeholder="Search.." value={criterion} onChange={this.changeInput} onKeyUp={this.search} />
                    <br/>
                    <div className={criterionColor}>
                         <ul>{this.state.criterionResponse}</ul>
                    </div>
                   
                </div>

            </div>
        )
    }
}


export default MainNav



