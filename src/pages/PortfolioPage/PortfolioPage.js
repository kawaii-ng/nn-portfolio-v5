import React, { useState, useEffect } from 'react'
import './PortfolioPage.scss'
import PreviewCard from '../../components/PreviewCard/PreviewCard'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase';

function PortfolioPage() {

    const navigate = useNavigate()
    const [projects, setProjects] = useState()
    
    const getProjects = async () => {
        
        const projectsCollectionRef = query(collection(db, "projects"))
        const data = await getDocs(projectsCollectionRef)
        setProjects(data.docs.map((doc)=>({id: doc.id, ...doc.data()})))

    }

    const scrollTo = (id) => {
        const anchor = document.getElementById(id)
        anchor.scrollIntoView({behavior: "smooth"});
    }

    useEffect(()=>{

        if(typeof projects === 'undefined')
            getProjects()
        
    }, [projects])

    return (
        <div className="portfolio-page">
            <div className="section --title">
                <h1>Portfolio</h1>
                <div className="type-bar">
                    <div onClick={()=>{scrollTo('section-react')}} className="type">React.js</div>
                    <div onClick={()=>{scrollTo('section-php')}} className="type">Php</div>
                    <div onClick={()=>{scrollTo('section-java')}} className="type">Java</div>
                    <div onClick={()=>{scrollTo('section-other')}} className="type">Others</div>
                </div>
            </div>

            <div className="section" id='section-react'>
                <h2>React.js Project(s)</h2>
                <div className="scroll-box">
                    {

                        typeof projects !== 'undefined'
                        &&
                        projects
                        .filter(project => project.type === 'react')
                        .map((project, index)=>(
                            <div key={index}>
                                <PreviewCard project={project}/>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="section"  id='section-php'>
                <h2>Php Project(s)</h2>
                <div className="scroll-box">
                    {

                        typeof projects !== 'undefined'
                        &&
                        projects
                        .filter(project => project.type === 'php')
                        .map((project, index)=>(
                            <div key={index}>
                                <PreviewCard project={project}/>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="section" id='section-java'>
                <h2>Java Project(s)</h2>
                <div className="scroll-box">
                    {

                        typeof projects !== 'undefined'
                        &&
                        projects
                        .filter(project => project.type === 'java')
                        .map((project, index)=>(
                            <div key={index}>
                                <PreviewCard project={project}/>
                            </div>
                        ))

                    }
                </div>
            </div>
            <div className="section" id='section-other'>
                <h2>Others</h2>
                <div className="scroll-box">
                    {

                        typeof projects !== 'undefined'
                        &&
                        projects
                        .filter(project => project.type === 'other')
                        .map((project, index)=>(
                            <div key={index}>
                                <PreviewCard project={project}/>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
