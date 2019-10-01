import React, { Component } from 'react'

class LoginPage extends Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault()
        this.props.handleLoginFormSubmit(this.state)
    }
    render() {
        
        return (
            <div>
                <h1>Please Login</h1>
                <form onSubmit={this.handleForm }>
                    <input onChange={this.handleOnChange}type="text" value={this.state.username} name="username"/>
                    <input onChange={this.handleOnChange} type="password" value={this.state.password} name="password"/>
                    <input type='submit'/>

                </form>
            </div>
        )
    }
}

export default LoginPage
