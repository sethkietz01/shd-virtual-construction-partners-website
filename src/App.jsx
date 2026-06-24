import { useState } from 'react'
import logo from './assets/shd_virtual_construction_logo.jpg';
import sampleImage from './assets/sample-image.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>SHD Virtual Construction Partners</h1>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>

        <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <nav>
            <p>Placeholder</p> 
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
          </nav>
        </div>
      </div>

      <div className="overview">
        <h1>Overview</h1>
        <p className="overview-text">SHD Virtual Construction Partners is a BIM and virtual construction firm focused on delivering fast, 
          accurate, and constructable digital solutions that support real-world building. 
          <br />
          <br />
          We partner with owners, designers, and contractors to bring clarity to complex projects through BIM, VDC, and model-based workflows. 
          <br />
          Our work is grounded in practical construction knowledge and focused on delivering information that can be trusted in the field.
          <br />
          <br />
          Our approach is built on three core principles:
          <br />
          <br />
          Fast – Efficient workflows that accelerate coordination and decision-making
          <br />
          Accurate – Precise, reliable models that reduce risk and rework
          <br />
          Constructable – Digital deliverables aligned with real construction means and methods
          <br/>
          <br />
          By prioritizing speed, accuracy, and constructability, SHD Virtual Construction helps teams plan, coordinate, and build with confidence</p>
      </div>

      <div className="image-container">
        <h1>Sample</h1>
        <img src={sampleImage} width="1080px" alt="sample image" />
      </div>

      <div className="footer">
        <img src={logo} />
        <a href="https://www.linkedin.com/company/shd-virtual-construction">Follow us on LinkedIn!</a>

      </div>
    </>
  )
}

export default App
