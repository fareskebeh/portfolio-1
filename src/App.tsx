import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import About from "./pages/About"
import Card from "./pages/Card"
import ContactMe from "./pages/ContactMe"
import MyWork from "./pages/MyWork"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div>
    <Router>
      <Nav/>
      <Card/>

      <Routes>
        
        <Route path="/about" element={< About/>}/>
        <Route path="/my-work" element={< MyWork/>}/>
        <Route path="/contact-me" element={< ContactMe/>}/>
        <Route path="*" element={<Navigate to="/about"/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
