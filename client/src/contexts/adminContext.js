import React, { Component } from 'react'

const AdminContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "deleteAdmin":
            return {
                /* guncellenmis state */
            }
        case "getAdminByUsername":
            return {
                ...state,
                admins: getAdminByName(action.payload)
            } 
               
        default:
            console.log("wrong action");
            return state
    }
}

const getAdminByName = async (name) =>{
    await fetch(`/api/admin/getByUsername/${name}`)
    .then(res => res.json())
    .then(admin => {
      console.log(admin);
      return admin;
        
    })
}

export class AdminProvider extends Component {
    
    
    state = {
        admins: [ {
            id: "-",
            name: "-",
            lastname: "-",
            username: "-",
            mail: "-",
            password: "-"
        }],
        dispatch: action => {

            this.setState(
                state => reducer(state, action)
            )
        }
        
    }
   

    render() {
        return (
            <AdminContext.Provider value={this.state}>
                {this.props.children}
            </AdminContext.Provider>
        )
    }
}

const AdminConsumer = AdminContext.Consumer;

export default AdminConsumer;
