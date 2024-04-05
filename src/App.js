import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Timeline } from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Timeline></Timeline>
      <Contact></Contact>
      
    </div>
  );
}

export default App;
