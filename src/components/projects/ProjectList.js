import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {

 

  return (
    <div className="project-list section">
     project list

      { projects && projects.map(projectx => {
        
        return (
          
         
         
          <Link to={'/project/' + projectx.id} key={projectx.id}>
          
            <ProjectSummary project={projectx} />
          </Link>
         
          
         
        )
      })}  
     
    </div>
  )
}

export default ProjectList
