import React from 'react'
import './HomePage.scss'
import Button from '../../components/Button/Button'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import profileImg from '../../images/profile-img-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faCss3Alt, faJava, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    return (
        <div className="home-page">

            <div className="section --center">
                <h1 className='title'>Welcome to my Portfolio!</h1>
                <Button title="View Portfolio"></Button>
            </div>

            <div className="section">
                <h1 className="head">About Me</h1>
                <div className="scroll-box --vertical --about-layout">
                    <div className="profile-img">
                        <img src={profileImg} alt=""/>
                    </div>
                    <h1 id="name">Nicky Ng</h1>
                    <p className='scroll-para'>
                        I am a PolyU year 3 student who major in Internet and Multimedia Technologies. 
                        In last summer, I have gained the work experience by joining App Development Intern. 
                        It is a valueable experience for me to reflect about myself and make progress on learning web programming. 
                        In the future, I would like to achieve my career goal which is being a web developer, 
                        since I am passionate on web programming. 
                    </p>

                    <div className="skill-box">
                        <div className="skill">
                            <FontAwesomeIcon icon={faHtml5} className="icon" color='#e34f26'/>HTML
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faCss3Alt} className="icon" color="#264de4"/>CSS
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faJsSquare} className="icon" color="#f7df1e"/>Js
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faReact} className="icon" color="#00d8ff"/>React
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faPhp} className="icon" color="#4f5b93" />Php
                        </div>
                        <div className="skill">
                            <FontAwesomeIcon icon={faJava} className="icon" color="#5382a1" />Java
                        </div>
                    </div>
                </div>
                {/* <div className="content --about-me">
                    <h1 className="head">About Me</h1>
                    <div className='scroll-box-1'>
                        <div>
                            <div className="profile-img">
                                <img src={profileImg} alt=""/>
                            </div>
                        </div>
                    
                        <p className='para'>
                            <h1>Nicky Ng</h1>
                            <h5><FontAwesomeIcon icon={faEnvelope} /> ng.ka.wai.nicky@gmail.com</h5>
                            <p className='scroll-para'>
                                I am a PolyU year 3 student who major in Internet and Multimedia Technologies. 
                                In last summer, I have gained the work experience by joining App Development Intern. 
                                It is a valueable experience for me to reflect about myself and make progress on learning web programming. 
                                In the future, I would like to achieve my career goal which is being a web developer, 
                                since I am passionate on web programming. 
                            </p>
                        </p>
            
                        <div>

                            <div className="skill-box-2">
                                <div className="skill">
                                    <FontAwesomeIcon icon={faHtml5} className="icon" color='#e34f26'/>HTML
                                </div>
                                <div className="skill">
                                    <FontAwesomeIcon icon={faCss3Alt} className="icon" color="#264de4"/>CSS
                                </div>
                                <div className="skill">
                                    <FontAwesomeIcon icon={faJsSquare} className="icon" color="#f7df1e"/>Js
                                </div>
                                <div className="skill">
                                    <FontAwesomeIcon icon={faReact} className="icon" color="#00d8ff"/>React
                                </div>
                                <div className="skill">
                                    <FontAwesomeIcon icon={faPhp} className="icon" color="#4f5b93" />Php
                                </div>
                                <div className="skill">
                                    <FontAwesomeIcon icon={faJava} className="icon" color="#5382a1" />Java
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="section">
                <h1>Recent Projects</h1>
                <div className="scroll-box --horizontal">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>
                <Button title="More Projects"></Button>
                {/* <div className="content --projects">
                    <h1>Recent Projects</h1>
                    <div className="scroll-box">
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                        <ProjectCard></ProjectCard>
                    </div>
                    <Button title="More Projects"></Button>
                </div> */}
            </div>
        </div>
    )
}

export default HomePage
