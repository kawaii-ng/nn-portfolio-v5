import React from 'react'
import './PortfolioPage.scss'
import PreviewCard from '../../components/PreviewCard/PreviewCard'

function PortfolioPage() {
    return (
        <div className="portfolio-page">
            <h1>Portfolio</h1>
            <div className="type-bar">
                <div className="type">React.js</div>
                <div className="type">Php</div>
                <div className="type">Java</div>
                <div className="type">Others</div>
            </div>
            <div className="section">
                <h2>React.js Project(s)</h2>
                <div className="scroll-box">
                    <PreviewCard></PreviewCard>
                    
                </div>
            </div>
            <div className="section">
                <h2>Php Project(s)</h2>
                <div className="scroll-box">
                    
                </div>
            </div>
            <div className="section">
                <h2>Java Project(s)</h2>
                <div className="scroll-box">
                    
                </div>
            </div>
            <div className="section">
                <h2>Others</h2>
                <div className="scroll-box">
                   
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
