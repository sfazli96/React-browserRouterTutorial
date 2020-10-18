import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


// This file is our header file. The button we wrote will show a button on the website but won't do anything when we press the button, yet.
// To create a function we name it like handleClickHome = () =>    
// history.push is so we can push the url to. Then we get the library for history.push which is withRouter, 
// Sometimes we modified the component when we change the url     
class Header extends Component {
    handleClickHome = () => {
        this.props.history.push("/");
    };

    handleClickEmployeeDirectory = () => {
        this.props.history.push("/directory");
    };

    render() {
        return (
            <div>
                <h2>This is the header</h2>
                <button onClick = {this.handleClickHome}>Home Page</button>
                <button onClick = {this.handleClickEmployeeDirectory}> 
                    Employee Directory
                </button>
            </div>
        );
    }
}

// This will pass in the history prop into the header as our header is being rendered.
// History prop is being passed into the withRouter functionality we added 
export default withRouter(Header);