import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import Podcast from './components/Podcast/Podcast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/> 
          <Route path="/:channelId" element={<Podcast/>}/>        
        </Route>     
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
