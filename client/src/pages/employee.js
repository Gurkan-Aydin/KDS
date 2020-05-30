import React, { Component } from 'react'
import MainNav from '../components/mainNav'
import Logo from '../components/logo'
import userImg from '../images/users.png'
import Table from '../layout/table'
import { Link } from 'react-router-dom'
import AdminBar from '../components/adminBar'
import { Redirect } from 'react-router-dom'



export default class employee extends Component {



    state = {
        colNames: [{ name: "", id: 1 }, { name: "Sicil No", id: 2 }, { name: "Name", id: 3 }, { name: "Started Date", id: 4 }, { name: "Last Advance Date", id: 5 }, { name: "Statu", id: 6 }],
        list: JSON.parse(localStorage.getItem('employee')),
        rows: [],
        redirect: false,
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    addList = () => {
        console.log(this.state.list)
        this.setState({
            rows: this.state.list.map(row => (
                <tr key={row.id}>
                    <td><img alt="logo" className="searchImg " src={(row.image === null) ? userImg : row.image} /></td>
                    <td>row.sicil_no</td>
                    <td>row.name row.lastname</td>
                    <td>row.started_date</td>
                    <td>row.last_advance_date</td>
                    <td>row.statu_name</td>
                </tr>
            ))
        })
    }

    render() {
        console.log(this.state.list)
        if (this.state.list === null) this.setState({ redirect: true })
        return (
            <div>
                <div style={{ position: 'absolute', width: '100%', top: '0' }}>

                    <div style={{ position: 'absolute', left: '-200px', width: '1000px', height: '100px', }}>
                        <Logo link="/index" />
                    </div>
                    <div style={{ position: 'absolute', right: '100px', height: '200px', maxLeft: "500px" }}>
                        <MainNav />
                    </div>
                    <div>
                        <AdminBar />
                    </div>
                </div>

                <div style={{ marginTop: "200px" }}>
                    {(this.state.list === null)? <Redirect to='/login' />: 
                    <Table colNames={this.state.colNames} rows={this.state.list.map(row => (
                        <tr key={row.id}>
                            <td><Link to={`api/employee/${row.id}`}> <img alt="logo" style={{ height: '50px', width: '50px' }} src={(row.image === null) ? userImg : row.image} /> </Link></td>
                            <td><Link to={`api/employee/${row.id}`}><div>{row.sicil_no}</div></Link></td>
                            <td><Link to={`api/employee/${row.id}`}><div>{row.name} {row.lastname}</div></Link></td>
                            <td><Link to={`api/employee/${row.id}`}><div>{row.start_date}</div></Link></td>
                            <td><Link to={`api/employee/${row.id}`}><div>{row.last_advance_date}</div></Link></td>
                            <td><Link to={`api/employee/${row.id}`}><div>{row.statu_name}</div> </Link></td>
                        </tr>
                    ))} />
                    }
                </div>
            </div>
        )
    }
}
