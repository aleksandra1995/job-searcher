import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Nav extends Component {
    render() {
        return (

 
            <div class="nav-bar">
          
            <h1>Welcome to Dev-Connect</h1>
                <Button.Group>
                <Button onClick={this.props.handleLoginClick} >LogIn</Button>
                <Button.Or />
                <Button positive onClick={this.props.handleSigUpClick}>SignUp</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Nav
