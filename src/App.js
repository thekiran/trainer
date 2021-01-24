import './App.css';
import Home from './screens/Home/Home';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
function App() { 
  gsap.registerPlugin(ScrollTrigger)
  return <Home />
}

export default App;
