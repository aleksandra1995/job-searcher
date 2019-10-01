import React, { Component } from 'react'
import JobCard from '../components/JobCard'


class JobContainer extends Component {
    render() {

        const foundJobs = this.props.jobs.map(job => {
            return <li><JobCard job={job}/></li>
        })
        
        return (
            <div>
               <ul>
               {foundJobs}
               </ul>
            </div>
        )
    }
}

export default JobContainer
