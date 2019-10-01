import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'; 

class JobCard extends Component {
    render() {
        return (
            <div>
                <p>
                <strong>{this.props.job.title}</strong></p>
                <p>Location: {this.props.job.location}</p>
                <p> Description: { ReactHtmlParser(this.props.job.description)}</p>
                <p>To Apply: {ReactHtmlParser(this.props.job.how_to_apply)}</p>
                



            </div>
        )
    }
}

export default JobCard
