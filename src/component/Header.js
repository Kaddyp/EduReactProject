import React, { Component, Fragment } from 'react';
import './Header.css'

class Header extends Component {
    constructor(){
        super()

        this.state={
            heading:"TSL Products Online Store",
            keywords:"User Input Here"
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({keywords:event.target.value?event.target.value:'User Input Here'});
        this.props.userText(event.target.value);
    }

    render(){
        return(
            <Fragment>
                <header>
                    <h3 className="logo">{this.state.heading}</h3>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.keywords}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;