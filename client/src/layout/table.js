import React, { Component } from 'react'
import "../css/sb-admin-2.css"


export default class table extends Component {
    state = {
        employees: JSON.parse(localStorage.getItem('employee')),
        thColNames: this.props.colNames.map(colName => (
            <th key={colName.id}> {colName.name}</th>
        )),


    }



    render() {
        console.log(this.props.rows)
        const { rows } = this.props;
        const { thColNames } = this.state

        return (
            <div style={{ marginTop: '200px', maxWidth: '90%', right: '5%', left: '5%', position: 'relative' }}>

                <div className="row no-gutters card mb-4 py-3 border-left-primary" >
                    <div style={{width: "100%"}}>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            {thColNames}
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            {thColNames}
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {rows}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                
                </div>
        )
    }
}
