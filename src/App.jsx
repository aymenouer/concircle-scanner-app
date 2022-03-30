import './App.css';
import Code from './components/code/Code';
import Download from './components/download/Download';
import Features from './components/features/Features';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';


function App() {
  return (
    <div className="app">
      <Topbar  />
    
      <div className="sections">

 <Intro/>
<Features/>
<Code/>
<Download/>

      </div>


    </div>
   
  );
}

export default App;
