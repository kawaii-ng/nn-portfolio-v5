import logo from './logo.svg';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
