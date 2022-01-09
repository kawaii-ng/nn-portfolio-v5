import logo from './logo.svg';
import './App.scss';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <>
      <Router>
        
        <NavBar></NavBar>
        
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}></Route>
          <Route path='/home' element={<HomePage/>} exact></Route>
          <Route path='/projects' element={<PortfolioPage />} exact></Route>
          <Route path='/project/:project-id' element={<ProjectPage />} exact></Route>
        </Routes>

        <Footer></Footer>

      </Router>
    </>
  );
}

export default App;
