import './App.css';
import { Routes, Route } from "react-router-dom"


// Import Pages
import Home from "./Pages/Home/Home"

// Import Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="Layers">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
