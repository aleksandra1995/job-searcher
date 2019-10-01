import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class SearchBar extends Component {

    state ={
        position: "",
        location: ""
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmittedSearchForm(this.state)
    }

    render() {
        return (
            <div>
             <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label>Position</label>
                <input onChange={this.handleOnChange} name="position"value={this.state.position} type="text" placeholder='Position' />
                </Form.Field>
                <Form.Field>
                <label>Location</label>
                <input onChange={this.handleOnChange} name="location" value={this.state.location} type="text" placeholder='Location' />
                </Form.Field>
                <Form.Field>
                
                </Form.Field>
                <Button type='submit'>Find Jobs</Button>
            </Form>
            </div>
        )
    }
}

export default SearchBar
