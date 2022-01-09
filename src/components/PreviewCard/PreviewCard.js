import React from 'react'
import './PreviewCard.scss'
import { useNavigate } from 'react-router-dom'

function PreviewCard(props) {

    const project = props.project
    const navigate = useNavigate()

    return (
        <div className='preview-card' onClick={()=>{navigate(`/project/${project.id}`)}}>
            <div className="view">
                View More
            </div>
            <img src={project.img} alt="" />
            <div className="card-title">{project.name}</div>
        </div>
    )
}

export default PreviewCard
