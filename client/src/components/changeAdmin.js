import React, { Component } from 'react'
import Popup from "reactjs-popup";



export default class changeAdmin extends Component {

    state = {
        input1 : "",
        input2 : "",
    }

    changeInput = (e) => {
        this.setState({
            [`input${e.target.id}`]: e.target.value,
        })
        
    }

    reducer = (action) => {
        switch (action  ) {
            case "username":
                this.styleMakeIndex();
                break;
            case "name":
                this.styleMakeNav();
                break;
            case "password":
                return <div>
                    <input className="formCenter form-control form-control-user" type="text" id="1" placeholder="New Password" value={this.state.input1} onChange={this.changeInput} />
                    <input className="formCenter form-control form-control-user" type="text" id="2" placeholder="Re-New Password" value={this.state.input2} onChange={this.changeInput} />
                    <button className="btn btn-primary btn-user btn-block" id="changePass" > Change Password </button>
                </div>
                break;
            default:
                console.log("wrong action")
        }
    };

    render() {
        return (
            <Popup trigger={<button> Trigger</button>} position="right center">
                {this.reducer()}
            </Popup>
        )
    }
}
