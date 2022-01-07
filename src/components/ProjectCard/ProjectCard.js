import React from 'react'
import './ProjectCard.scss'
import fakeImg from '../../images/fake-img-01.PNG'
import Button from '../Button/Button'

function ProjectCard() {
    return (
        <div className='project-card'>
            <h3>Title</h3>
            <div className='project-img'>
                <img src={fakeImg} alt="" />
            </div>
            <p>This is a project to introduce myself.</p>
            <div className='button-box'>
                <Button title="View More"></Button>
            </div>
        </div>
    )
}

export default ProjectCard
