import React, { Component } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

class SidebarPage extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.sortAlphabetically}>Sort Alphabetically</button>
                <label>
                    <strong>Filter:</strong>
                    <select onChange={(e) => this.props.handleJobTypeSwitch(e.target.value)}>
                    <option value="Full Time">Full-Time</option>
                    <option value="Part Time">Part-Time</option>
                    
                </select>
                </label>
                <button>Sort by date added</button>

                

            </div>
        )
    }
}

export default SidebarPage
