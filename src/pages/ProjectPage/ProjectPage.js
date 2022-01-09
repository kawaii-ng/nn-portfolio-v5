import React, { useState, useEffect } from 'react'
import './ProjectPage.scss'
import fakeImg from '../../images/fake-img-01.PNG'
import Button from '../../components/Button/Button'
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { collection, getDoc, onSnapshot, query, where, doc } from 'firebase/firestore'
import { db } from '../../config/firebase';

function ProjectPage() {

    let {id} = useParams();
    const [project, setProject] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [scrollY, setScrollY] = useState(window.scrollY);

    const getProject = async () => {
        
        const projectsDocRef = doc(db, "projects", id)
        const data = await getDoc(projectsDocRef)
        // setProject(data.doc.map((doc)=>({id: doc.id, ...doc.data()})))
        setProject(data.data())
    }

    useEffect(()=>{

        if(typeof project === 'undefined'){

            getProject()
            setIsLoaded(false)

        }else{
            setIsLoaded(true)
        }
        
        console.log(project)
        
    }, [project, isLoaded])
    
    
    document.addEventListener('scroll', function(e) {
        setScrollY(window.scrollY)
    })

    return (
        <div className='project-page' style={{paddingTop: scrollY > 5? '0vh':'15vh'}}>
            <div className='project-img'>
                <img src={isLoaded && project.img} alt="" />
            </div>
            <div className="project">
                <div className="section" id="project-name">
                    <div>
                        <Button title="Code" icon={faCode} link={isLoaded && project.codeUrl}></Button>
                        <Button title="Demo" icon={faLink} link={isLoaded && project.demoUrl}></Button>
                    </div>
                    <h1><span>{isLoaded && project.name[0]}</span>{isLoaded && project.name.substring(1)}</h1>
                    <p>{isLoaded && project.brief}</p>
                </div>
                <div className="section" id="project-features">
                    <h3><span>F</span>eature(s)</h3>
                    <ul>
                        {
                            isLoaded 
                            &&
                            typeof project.features !== 'undefined' && project.features.map((item, index)=>((
                                <li key={index}>
                                    {item}
                                </li>
                            )))
                        }
                    </ul>

                </div>
                <div className="section" id="project-functions">
                    <h3><span>F</span>unction(s)</h3>
                    <ul>
                        {
                            isLoaded 
                            &&
                            typeof project.functions !== 'undefined' && project.functions.map((item, index)=>((
                                <li key={index}>
                                    {item}
                                </li>
                            )))
                        }
                    </ul>
                </div>
                <div className="section" id="project-tools">
                    <h3><span>D</span>ev Tool(s)</h3>
                    <ul>
                        {
                            isLoaded 
                            &&
                            typeof project.tools !== 'undefined' && project.tools.map((item, index)=>((
                                <li key={index}>
                                    {item}
                                </li>
                            )))
                        }
                    </ul>
                </div>
                <div className="section" id="project-skills">
                    <h3><span>S</span>kill(s)</h3>
                    <ul>
                        {
                            isLoaded 
                            &&
                            typeof project.skills !== 'undefined' && project.skills.map((item, index)=>((
                                <li key={index}>
                                    {item}
                                </li>
                            )))
                        }
                    </ul>
                </div>
                <div className="section" id="project-depends">
                    <h3><span>D</span>ependent(s)</h3>
                    <ul>
                        {
                            isLoaded 
                            &&
                            typeof project.depends !== 'undefined' && project.depends.map((item, index)=>((
                                <li key={index}>
                                    {item}
                                </li>
                            )))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
