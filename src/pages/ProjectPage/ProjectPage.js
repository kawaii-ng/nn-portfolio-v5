import React from 'react'
import './ProjectPage.scss'
import fakeImg from '../../images/fake-img-01.PNG'
import Button from '../../components/Button/Button'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'

function ProjectPage() {
    return (
        <div className='project-page'>
            <div className='project-img'>
                <img src={fakeImg} alt="" />
            </div>
            <div className="project">
                <div className="section" id="project-name">
                    <div>
                        <Button title="Code" icon={faCode}></Button>
                        <Button title="Demo" icon={faLink}></Button>
                    </div>
                    <h1><span>P</span>roject</h1>
                </div>
                <div className="section" id="project-features">
                    <h3><span>F</span>eature(s)</h3>
                    <ul>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                    </ul>

                </div>
                <div className="section" id="project-functions">
                    <h3><span>F</span>unction(s)</h3>
                    <ul>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                    </ul>
                </div>
                <div className="section" id="project-tools">
                    <h3><span>D</span>ev Tool(s)</h3>
                    <ul>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                    </ul>
                </div>
                <div className="section" id="project-skills">
                    <h3><span>S</span>kill(s)</h3>
                    <ul>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                    </ul>
                </div>
                <div className="section" id="project-depends">
                    <h3><span>D</span>ependent(s)</h3>
                    <ul>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                        <li>point</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
