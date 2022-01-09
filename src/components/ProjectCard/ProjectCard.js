import React from 'react'
import './ProjectCard.scss'
import fakeImg from '../../images/fake-img-01.PNG'
import Button from '../Button/Button'

function ProjectCard(props) {

    const project = props.project

    return (
        <div className='project-card'>
            <div className='project-img'>
                <img src={project.img} alt="" />
            </div>
            <p>{project.brief}</p>
            <div className='button-box'>
                <Button title="View More" link={`/project/${project.id}`}/>
            </div>
        </div>
    )
}

export default ProjectCard
