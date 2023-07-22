import './App.css';
import Companies from './component/Companies';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

import Header from'./component/Header'
import Hero from './component/Hero';
import Getstarted from './component/Residencies/GetStarted/Getstarted';
import Residencies from './component/Residencies/Residencies';
import Value from './component/Value/Value';
function App() {
  return (
    <div className='App'>

    <div>
      <div className="white-gradiante"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
<Residencies/>
<Value/>
<Contact/>
<Getstarted/>
<Footer/>
      </div>
   
  );
}

export default App;
