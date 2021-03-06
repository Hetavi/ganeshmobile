import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { editProject } from '../../store/actions/editProject'

import { Redirect } from 'react-router-dom'
import moment from 'moment'

class ProjectDetails1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actual:this.props.project.actual,
        mobile:this.props.project.mobile,        
        Notes:this.props.project.Notes,
        radyon:this.props.project.radyon,
        deliveredon:this.props.project.deliveredon,
        docid:this.props.docid
    }
  
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  
  }
  handleChange1 = (e) => {
    console.log(this.state)
    this.setState({
     Notes:'ready on-'+new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear()+'\n'+this.state.Notes
    })
    console.log([e.target.id])
  
  }
  handleChange2 = (e) => {
    this.setState({
      
      radyon:'yes',
     Notes:'Delivered on-'+new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear()+'\n'+this.state.Notes
    })
    console.log(this.state)
  
  }

  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.editProject(this.state);
   
    this.props.history.push('/');
    window.open("http://wa.me/91"+this.state.mobile+"?text=Your Device is "+this.state.Notes);
  }
  
  render() {
  

    //if (!auth.uid) return <Redirect to='/signin' /> 
    //if (project) {xx
    return (
      <div className="container section project-editing">
        ProjectDetails
        
        <form className="white" onSubmit={this.handleSubmit}>
        
          <div className="card z-depth-0">

            <div className="card-content">
            <span >
              Name:{this.props.project.name},Mob.{this.props.project.mobile},Rec.on,
              {moment(this.props.project.createdAt.toDate()).calendar()},
              Estimate{this.props.project.estimate},Problem:{this.props.project.problem}
Model-{this.props.project.modelno },Battery-{this.props.project.battery },Sim-{this.props.project.sim},Memory-{this.props.project.memorycard}
</span>     </div>
            <div className="input-field ">
              <input type="Number" id='actual' defaultValue={this.state.actual} onChange={this.handleChange} />
              <label className='active' htmlFor="mobile">Bill Amount</label></div>
              <div className="input-field hide ">
              <input type="text" id='radyon' defaultValue={this.state.radyon} onChange={this.handleChange2} />
              <label className='active' htmlFor="mobile">Deliverd ?</label>
              
              
              </div>

              <div className="input-field ">
              <textarea id='Notes' defaultValue={this.state.Notes} onChange={this.handleChange} />
              <label className='active' htmlFor="mobile">Notes</label>
           </div>
           
                               
                          <label>
                            <input type="checkbox" id='c1'  onChange={this.handleChange1} />
                            <span>Job Finished </span>
                            </label>
                            <label>
                            <input type="checkbox" id='c2' onChange={this.handleChange2} />
                            <span>Delivered </span>
                          
                          </label>
                       
                       
                        
                          <label>

                            
                          </label>
                        
                        
            <div className="input-field">
              <button className="btn pink lighten-1">Save</button>
            </div>

            <div className="card-action grey lighten-4 grey-text">
            </div>
          </div>
        </form>
       
      </div>
    )
  }
  //}
}

const mapStateToProps = (state, ownProps) => {


  const id = ownProps.match.params.id;
  const projects = state.firestore.data.ganesh;
  const project = projects ? projects[id] : null

  return {
    docid:id,
    project: project,
    auth: state.firebase.auth
  }

}
const mapDispatchToProps = dispatch => {
  return {
    editProject: (project) => dispatch(editProject(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails1)
