import React, { Component } from 'react'

import ProjectList1 from '../projects/ProjectList1'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {  
  
  render() {    

    const { projects } = this.props;
    console.log('dashbord.js')
  
    //here projects created from props
    //remove remark tag if auth people only read
    //if (!projects) return <Redirect to='/edit' />  

    return (
      <div className="dashboard container">
        <p>Dashboard </p>
        <div className="row">
      {/*  <div className="col s12 m2">
            <Notifications notifications={notifications} />
    </div>
          <div className="col s12 m2">
            <ProjectList projects={projects} />
    </div> */}
         
          <div className="col s12 m2">
            <ProjectList1 projects={projects} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('dashbord--.js mapStateToProps')
  return {
    projects: state.firestore.ordered.ganesh,
    auth: state.firebase.auth
  
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'ganesh',where: ['radyon','==', 'No']}
   
  ])
)(Dashboard)
