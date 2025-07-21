import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import About from "./pages/About"
import Card from "./pages/Card"
import ContactMe from "./pages/ContactMe"
import MyWork from "./pages/MyWork"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="flex flex-col md:flex-row">
    <Router>
      <Nav/>
      <Card/>

      <Routes>
        <Route path="/about" element={<div className="sm:pt-20 px-8"> <About/> </div> }/>
        <Route path="/my-work" element=   {<div className="sm:pt-20 px-8">< MyWork/></div>}/>
        <Route path="/contact-me" element={<div className="sm:pt-20 px-8">< ContactMe/></div>}/>
        <Route path="*" element={<Navigate to="/about"/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
