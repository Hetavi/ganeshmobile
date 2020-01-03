import React from 'react'
import moment from 'moment'

const ProjectSummary1 = ({ project4 }) => {

  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card-panel teal">
          <span className="white-text">Name:{project4.name},Mob.{project4.mobile},Rec.on,{moment(project4.createdAt.toDate()).calendar()},Estimate{project4.estimate}</span>
          <h5 className="white-text ">Problem:{project4.problem}</h5>
          <span className="white-text">Model-{project4.modelno},Battery-{project4.battery},Sim-{project4.sim},Memory-{project4.memorycard}</span>

        </div>
      </div>
    </div>
  )

}

export default ProjectSummary1
