import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Menu from './Component/Menu/Menu';
import Section from './Component/Section/Section';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact.js/Contact';
import Education from './Component/Education/Education';
import SkillSet from './Component/Skill/SkillSet';
// import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <>
      {/* <Navbar/>  */}
      <Header />
      <Menu />
      
      <Section/>
      
      <About/>
      <Portfolio/>
      <SkillSet/>
      <Education/>
      
      
      <Contact/>
    </>

  );
}

export default App;
