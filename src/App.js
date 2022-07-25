import './App.css';
import Home from './component/Home'
import Menu from './component/Menu'
import Tech from './component/Tech'
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <About/>
        <Tech/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
