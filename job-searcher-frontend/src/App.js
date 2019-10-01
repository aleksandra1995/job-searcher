
import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage'
import JobsPage from './containers/JobsPage'
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import SignUpPage from './components/SignUpPage';





export class App extends Component {

  

  state = {
    jobs: [],
    filter: {
        position: '',
        location: ''
      },
      current_user: '',
      sorted: false,
      jobType: ""
      
    
  }

  sortAlphabetically = () => {
    this.setState({
      sorted: !this.state.sorted
    })
  
  }

  handleSubmittedSearchForm = (formInfo) => {
    this.setState({
      filter: formInfo
    })
    this.props.history.push('/jobs')

    
}

componentDidMount() {
    fetch("http://localhost:3000/jobs")
      .then(resp => resp.json())
      .then(jobs => this.setState({jobs}))


}

getProfile = () => {
  
    fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${localStorage.token}`
    }
})
.then(resp => resp.json())
.then(console.log)
  
}

  handleLoginClick = () => {
    this.props.history.push('/login')
    
  }

  handleLoginFormSubmit = (info) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => { 
    
      if (data.jwt) {
        localStorage.token = data.jwt
        this.props.history.push('/profile')
        // this.props.redirect('profile')
      }else{alert("Invalid username or Password")}
    })
    
  }

  handleSigUpClick = () => {
    this.props.history.push('/signup')
  }

  handleSubmittedSignUpForm = (info) => {
    fetch('http://localhost:3000/signup', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.jwt) {
        localStorage.token = data.jwt
        this.props.history.push('/profile')
        // this.props.redirect('profile')
      }
    })
    
  }

  handleJobTypeSwitch = (value) => {
    this.setState({
      jobType: value
    })
    
  }
  
  render() {

    console.log(this.state.current_user);
    

    let filteredJobs = this.state.jobs
    
    filteredJobs = filteredJobs.filter(job => {
      return (
        job.title.toLowerCase().includes(this.state.filter.position.toLowerCase().trim()) &&
        job.location.toLowerCase().includes(this.state.filter.location.toLowerCase().trim())
      )
    })

    if (this.state.sorted) {
      filteredJobs = filteredJobs.sort((a,b) => {
        return a.title.localeCompare(b.title)
      })
      
    }

    if (this.state.jobType === "Part Time") {
      
      filteredJobs = filteredJobs.filter(job => {
        return job.kind === "Part Time"
      })
    }

    if (this.state.jobType === "Full Time") {
      
      filteredJobs = filteredJobs.filter(job => {
        return job.kind === "Full Time"
      })
    }



    return (
      
    <Switch>
      <Route
         exact path={'/'}
          render={routerProps => <HomePage 
            handleSigUpClick={this.handleSigUpClick}
            handleLoginClick={this.handleLoginClick}
          {...routerProps} handleSubmittedSearchForm={this.handleSubmittedSearchForm}/>} />
      <Route
          path={'/jobs'}
          render={routerProps => <JobsPage 
            handleJobTypeSwitch={this.handleJobTypeSwitch}
            sortAlphabetically={this.sortAlphabetically}
            handleSigUpClick={this.handleSigUpClick}
            handleLoginClick={this.handleLoginClick}
          handleSubmittedSearchForm={this.handleSubmittedSearchForm} jobs={filteredJobs }{...routerProps}/>} />
          <Route
         exact path={'/login'}
          render={routerProps => <LoginPage 
            {...routerProps}
            handleLoginFormSubmit={this.handleLoginFormSubmit}
          />} />
          <Route
         exact path={'/profile'}
          render={routerProps => <ProfilePage 
            {...routerProps}/>} />
          <Route
         exact path={'/signup'}
          render={routerProps => <SignUpPage 
            {...routerProps}
            handleSubmittedSignUpForm={this.handleSubmittedSignUpForm}
          />} />
    </Switch>
    )
  }
}

export default withRouter(App)


