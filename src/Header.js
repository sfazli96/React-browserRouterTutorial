import React, { Component } from 'react'


// This file is our header file. The button we wrote will show a button on the website but won't do anything when we press the button, yet.
class Header extends Component {
    render() {
        return (
            <div>
                <h2>This is the header</h2>
                <button>Home</button>
                <button>Directory</button>
            </div>
        );
    }
}

export default Header;