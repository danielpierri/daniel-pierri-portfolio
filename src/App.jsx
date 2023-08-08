import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"

function App() {
  return (
    <>
      <Routes>
        <Route path="/daniel-pierri-portfolio" element={<Home />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
