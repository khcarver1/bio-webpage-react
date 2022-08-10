import './App.css';
import Header from './components/Header.js';
import Contactme from './components/Contactme.js';  
import horiseon from './images/horiseon.jpg';
import runbuddy from './images/runbuddy.jpg';
import headshot from './images/headshot.jpg';


function App() {
  return (
    <div>
  <Header></Header>
  <div className="aboutme-container" id="aboutme">
    <div className="information-container">
      <img src={headshot} alt />
      <div className="box-content">
        <h3>About me</h3>
        <p>I've spent 7 years now working in finance, lending, collections, and management of those lines of business.</p>
        <p>What has been a hobby for many years now - computers, technology, and programming - is now something I'm pursuing as a full time career.</p><p>
        </p><p>You can see my work below.</p>   
      </div>
    </div>
  </div>
  <div className="work-container" id="seemywork">
    <h2 className="section-heading">See my work</h2>
    <div className="workexample">
      <div className="showcase">
        <h4>Run-Buddy Project</h4>
        <a href="https://khcarver1.github.io/run-buddy/" alt="Screenshot of runbuddy website" target="_blank">
          <img src={runbuddy} title="Run-Buddy project" />
        </a>
        <h4>Other Project Examples</h4>
      </div> 
      <div className="examples-row">
        <a href="https://khcarver1.github.io/develop/" alt="Screenshot of Horiseon website" target="_blank">
          <img src={horiseon} title="Horiseon project" />
        </a>
        <a href="https://khcarver1.github.io/develop/" alt="Screenshot of Horiseon website" target="_blank">
          <img src={horiseon} title="Horiseon project" />
        </a>
        <a href="https://khcarver1.github.io/develop/" alt="Screenshot of Horiseon website" target="_blank">
          <img src={horiseon} title="Horiseon project" />
        </a>
      </div>   
    </div>  
  </div>
  <Contactme></Contactme>
</div>

  );
}

export default App;
