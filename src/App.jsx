import { useState } from 'react'
import sampleImage from './assets/sample-image.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <h1>SHD Virtual Construction Partners</h1>
        <div className="navbar">
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

      <h1>Sample</h1>
      

      <img src={sampleImage} width="1080px" alt="sample image" />

      <div className="footer">
        <a href="https://www.linkedin.com/company/shd-virtual-construction">Follow us on LinkedIn!</a>
      </div>
    </>
  )
}

export default App
