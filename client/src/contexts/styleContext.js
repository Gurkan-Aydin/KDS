import React from "react";

const Context = React.createContext();


export class StyleProvider extends React.Component {

    state = {

        logoStyle: {},

        navStyle: {},

        dispatch: (action) => {
            this.reducer(action);
        }
    };

    reducer = (action) => {
        switch (action.type) {
            case "index":
               this.styleMakeIndex();
                break;
            case "nav":
                this.styleMakeNav();
                break;
            default:
                console.log("wrong action")
        }
    };

    styleMakeIndex = (e) => {
        this.setState({
            logoStyle: {},
            navStyle: {},


        })
    }

    styleMakeNav = (e) => {
        this.setState({
            logoStyle: {
                position: 'absolute',
                left: '-10%',
                maxWidth: '60%',    
            },

                navStyle: {
                    position: 'absolute',
                    right: '10%',
                    maxWidth: '60%',               
                }
        })
    }

    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={state}>{children}</Context.Provider>;
    }
}

export const StyleConsumer = Context.Consumer;