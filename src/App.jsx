import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';
import sampleImage from './assets/sample-image.jpg';
import sampleImage2 from './assets/sample-image-2.jpg';
import sampleImage3 from './assets/sample-image-3.jpg';
import linkedinLogo from './assets/LinkedIn.svg';
import './App.css'
import contactUs from './pages/ContactUs.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioImages = [sampleImage, sampleImage2, sampleImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const trackRef = useRef(null);

  const handleScroll = (direction) => {
  if (direction === 'next') {
    setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
  } else {
    setCurrentIndex((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  }
};

  const problems = [
  { title: "Communication", desc: "Crews waiting on incomplete or unclear information." },
  { title: "Material Flow", desc: "Material waste and field re-handling." },
  { title: "Detailing", desc: "Limited prefabrication due to lack of detail." },
  { title: "Sequencing", desc: "Rework caused by coordination gaps." },
  { title: "Execution", desc: "Disconnect between BIM and field execution." }
];

const deliverables = [
  { title: "Field-Ready BOMs", details: ["Install package-specific lists", "Spool-level quantity breakdowns", "Zone-based organization", "Supports kitting, staging, and tracking"], note: "Material shows up ready to install, not sorted in the field" },
  { title: "Prefabrication Packages", details: ["Conduit reach & trapeze drawings", "Assembly sheets with dimensions", "Kit-of-parts definitions", "Labor-aligned detailing"], note: "We define how it's built, not just how it looks" },
  { title: "Spooling & Installation Drawings", details: ["Area and system-based spooling", "Clear, field-friendly layouts", "Install sequencing support", "Minimized field measuring"], note: "Crews install with confidence, not interpretation" },
  { title: "AWP-Aligned Work Packaging", details: ["Supports Workface Planning (WFP)", "Installation Work Packages (IWPs)", "Constraint-free, executable scopes"], note: "Every model output feeds a planned work package" }
];

const whyPoints = [
  "Field-First Mindset: Built from real prefab and VDC leadership experience.",
  "Production-Focused: We prioritize labor savings and install efficiency.",
  "Prefab-Driven: We maximize offsite construction opportunities.",
  "Execution-Oriented: Deliverables designed for the people doing the work."
];

const resultPoints = [
  "Reduced labor hours",
  "Increased prefab utilization",
  "Improved schedule reliability",
  "Less field rework",
  "Better material control"
];
  

  return (
    <>
      <div className="hook-statement">
     

        <section className="hero-section">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Built for Contractors.<br /> 
              <span className="text-highlight">Driven by the Field.</span>
            </motion.h1>

            <div className="hero-grid">
              <div className="status-quo">
                <h3>The Status Quo</h3>
                <p>Most BIM firms stop at coordination. We see it as only the beginning.</p>
              </div>
              
              <div className="shd-advantage">
                <h3>The SHD Advantage</h3>
                <p>We bridge the gap from modeling to field-ready installation, delivering packages that reduce labor and maximize prefabrication.</p>
              </div>
            </div>
          </div>
        </section>
        

        <section className="portfolio-showcase" style={{ position: 'relative', overflow: 'hidden' }}>
          {portfolioImages.map((img, index) => (
            <motion.img 
              key={index}
              src={img}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />
          ))}

          <div className="gradient-overlay"></div>

          <div className="portfolio-content" style={{ position: 'relative', zIndex: 2 }}>
            <div className="text-overlay">
              <h2>Project Name</h2>
              <button className="view-case-study">View Case Study</button>
            </div>
          </div>

          <div className="portfolio-controls" style={{ zIndex: 3 }}>
            <button onClick={() => handleScroll('prev')}>❮</button>
            <button onClick={() => handleScroll('next')}>❯</button>
          </div>
        </section>

        <section className="problem-solution-section">
          <div className="flow-container">
            <div className="side-column problem">
              <h3>The Friction</h3>
              <p>Coordination gaps lead to field rework, material waste, and crews waiting for clarity.</p>
            </div>

            <div className="visual-connector">
              <span className="arrow">→</span>
            </div>

            <div className="side-column approach">
              <h3>The SHD Flow</h3>
              <div className="steps">
                <span>Model</span>
                →
                <span>Spool</span>
                →
                <span>Prefab</span>
                →
                <span>Install</span>
              </div>
              <p>We convert models into production-ready packages, not just visualization.</p>
            </div>
          </div>
        </section>

        <section className="problems-we-solve-container">
          <h2 className="section-header">The Problems We Solve</h2>
          <div className="problem-grid">
            {problems.map((item, index) => (
              <div key={index} className="problem-card">
                <div className="card-indicator" /> 
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="deliverables-container">
          <h2 className="section-header">Deliverables</h2>
          <section className="deliverables-grid">
            {deliverables.map((d, i) => (
              <motion.div key={i} className="deliverable-card" whileHover={{ y: -5 }}>
                <div className="card-indicator" /> 
                  <h3>{d.title}</h3>
                  <ul>{d.details.map(item => <li key={item}>{item}</li>)}</ul>
                  <p className="note">{d.note}</p>
              </motion.div>
            ))}
          </section>
        </div>

        <section className="summary-container">
          <div className="summary-col why-shd">
            <h3>Why SHD</h3>
            <ul>
              {whyPoints.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
          
          <div className="summary-col the-result">
            <h3>The Result</h3>
            <ul className="results-list">
              {resultPoints.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        </section>

        <section className="closing-container">
          <div className="cta-banner">
            <h2>Let's Build Smarter</h2>
            <p>If your goal is to reduce field labor, increase prefab, and execute with precision, we're built to support you.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default App