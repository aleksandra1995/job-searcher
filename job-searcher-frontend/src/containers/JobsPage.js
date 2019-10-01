import Nav from '../components/Nav'
import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import JobContainer from '../components/JobContainer'
import SidebarPage from '../components/SidebarPage'




class JobsPage extends Component {
    render() {
        
        return (
            <div>
               <Nav
               handleSigUpClick={this.props.handleSigUpClick}
               handleLoginClick={this.props.handleLoginClick}
               />
               <SearchBar 
               handleSubmittedSearchForm={this.props.handleSubmittedSearchForm}/>
                <SidebarPage 
                handleJobTypeSwitch={this.props.handleJobTypeSwitch}
                sortAlphabetically={this.props.sortAlphabetically}
                />
                <JobContainer  jobs={this.props.jobs}/>
            </div>
        )
    }
}

export default JobsPage
