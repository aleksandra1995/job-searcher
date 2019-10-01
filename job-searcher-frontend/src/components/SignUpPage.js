import React, { Component } from 'react'

class SignUpPage extends Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmitted = (e) => {
        e.preventDefault()
        this.props.handleSubmittedSignUpForm(this.state)

    }
    render() {
        console.log(this.state);
        
        return (

            
            <div>
                <h1>Please Sign Up</h1>
                <form onSubmit={this.formSubmitted}>
                    <input onChange={this.handleOnChange} value={this.state.username} name="username" type="text" />
                    <input onChange={this.handleOnChange} value={this.state.password} name="password" type="password" />
                    <input type="submit" />

                </form>
            </div>
        )
    }
}

export default SignUpPage
