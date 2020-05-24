import React from "react";
import { Redirect } from 'react-router-dom'

const Context = React.createContext();


export class AdminProvider extends React.Component {

    state = {
        isValid: false,
        loggedAdmin: [],
        message: "",
        redirect: false,
        dispatch: (action) => {
            this.setState(this.reducer(action));
        }
    };

    reducer = (action) => {
        switch (action.type) {
            case "adminIsValid":
                this.changeValid(action.payload);
                this.setState({
                    message: ""
                })
                break;
            default:
                this.setState({
                    message: "wrong admin acation"
                })
        }
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/target' />
        }
    }

    changeValid = async (input) => {
        const response = await fetch(`/api/admin/getByUsername/${input.username}`)
        const admins = await response.json();
        console.log({admins})
        if (admins === []) {
            this.setState({ message: "wrong username", redirect: false});
        } else {
            for (let admin of admins) {
                let inputPassword = input.password;
                let password = admin.password;

                if(password !== inputPassword){
                    this.setState({ message: "wrong password", redirect: false});
                }else{
                    this.setState({ message: "" , redirect: true});
                    localStorage.setItem('current', JSON.stringify({ loggedAdmin: admin, isValid: true }));
                }
            }
        }
    };

    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={state}>{children}</Context.Provider>;
    }
}

export const AdminConsumer = Context.Consumer;