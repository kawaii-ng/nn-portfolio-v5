import './App.scss';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <>
      <Router>
        
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<Navigate to="/home"/>}></Route>
          <Route path='/home' element={<HomePage/>} exact></Route>
          <Route path='/admin' element={<AdminPage />} exact></Route>
          <Route path='/projects' element={<PortfolioPage />} exact></Route>
          <Route path='/project/:id' element={<ProjectPage/>} ></Route>
        </Routes>

        <Footer/>

      </Router>
    </>
  );
}

export default App;
