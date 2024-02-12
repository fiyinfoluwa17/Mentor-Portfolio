import './App.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from "./Project"
import Contact from "./Contact"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
