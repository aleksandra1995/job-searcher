import React, { Component } from 'react'
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'


class HomePage extends Component {

   
    render() {
        return (
            <div>
               <Nav
               handleSigUpClick={this.props.handleSigUpClick}
               handleLoginClick={this.props.handleLoginClick}
               />
               <SearchBar
                handleSubmittedSearchForm={this.props.handleSubmittedSearchForm}
               />
            </div>
        )
    }
}

export default HomePage
