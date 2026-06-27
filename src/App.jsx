import { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import logo from './assets/shd_virtual_construction_logo.jpg';
import sampleImage from './assets/sample-image.jpg';
import sampleImage2 from './assets/sample-image-2.jpg';
import sampleImage3 from './assets/sample-image-3.jpg';
import linkedinLogo from './assets/LinkedIn.svg';
import './App.css'

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
      <div className="header">
        <div className="logo">
          <a href="./">
            <img src={logo} width='120px' />
          </a>
        </div>
        
        <div className="title">
          <a href="./">
            SHD Virtual Construction Partners
          </a>
          <h2> | From Model to Field Execution</h2>
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>

        <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
          <nav className="navbar">
            <a href="" className="contact-link">Contact Us</a> 
            {/*
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
            <p className="divider">|</p>
            <p>Placeholder</p>
            */}
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

      <div className="hook-statement">
        <div className="hook-head-container">
          <div className="hook-heading">
            <h1>Built for Contractors. Driven by the Field.</h1>
          </div>

          <div className="value-prop-container">
            <div className="prop-card pain">
              <small>The Status Quo</small>
              <h3>Most BIM firms stop at coordination.</h3>
            </div>

            <div className="prop-card gain">
              <small>The SHD Advantage</small>
              <h3>We bridge the gap from modeling to field-ready installation.</h3>
              <p>Delivering packages that reduce labor, eliminate guesswork, and maximize prefabrication.</p>
            </div>
          </div>
        </div>

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





















        <div className="portfolio-piece-1">
          <div className="portfolio-text">
            <h2><i>Portfolio Design Name</i></h2>
            <p>Case study & information about the project</p>
          </div>
          <div className="portfolio-piece-1-image">
            <img src={sampleImage} />
          </div>
        </div>

        <div className="approach-grid">
          <section className="problems-we-solve">
            <h2 className="problems-we-solve-header section-header">The Problems We Solve</h2>
            <div className="deliv-card-blue">
                <ul>
                  <li>Crews waiting on incomplete or unclear information</li>
                  <li>Material waste and filed re-handling</li>
                  <li>Limited prefabrication due to lack of detail</li>
                  <li>Rework caused by coordination gaps</li>
                  <li>Disconnect between BIM and field execution</li>
                </ul>
              </div>
          </section>

          <section className="our-approach">
            <h2 className="our-approach-header section-header">Our Approach</h2>
            <div className="deliv-card-blue">
              <p>We turn coordinated models into <strong>install-ready deliverables</strong> aligned with how work actually gets built</p>
              <p><strong>Model → Spool → Prefabricate → Install</strong></p>
              <p>Every output is designed to support <strong>production, not just visualization</strong></p>
            </div>
          </section>
        </div>

        <section className="deliverables">
          <h2 className="core-deliverables-text section-header">Core Deliverables</h2>
          <div className="grid">
            <div className="deliv-card">
              <h3>Field-Ready BOMs</h3>
              <ul>
                <li>Install package-specific lists</li>
                <li>Spool-level quantity breakdowns</li>
                <li>Zone-based organization</li>
                <li>Supports kitting, staging, and tracking</li>
              </ul>
              <p className="list-ending"><strong>Material shows up ready to install, not sorted in the field</strong></p>
            </div>

            <div className="deliv-card">
              <h3>Prefabrication Packages</h3>
              <ul>
                <li>Conduit reack & trapeze drawings</li>
                <li>Assembly sheets with dimensions and tolerances</li>
                <li>Kit-of-parts definitions</li>
                <li>Labor-aligned detailing for shop production</li>
              </ul>
              <p className="list-ending"><strong>We define how it's built, not just how it looks</strong></p>
            </div>

            <div className="deliv-card">
              <h3>Spooling & Installation Drawings</h3>
              <ul>
                <li>Area and system-based spooling</li>
                <li>Clear, field-friendly layouts</li>
                <li>Install sequencing support</li>
                <li>Minimized field measuring</li>
              </ul>
              <p className="list-ending"><strong>Crews install with confidence, not interpretation</strong></p>
            </div>

            <div className="deliv-card">
              <h3>AWP-Aligned Work Packaging</h3>
              <ul>
                <li>Supports Workface Planning (WFP)</li>
                <li>Installation Work Packages (IWPs)</li>
                <li>Constraint-free, executable scopes</li>
              </ul>
              <p className="list-ending"><strong>Every model output feeds a planned work package</strong></p>
            </div>
          </div>
        </section>

        <div className="approach-grid">
            <section className="problems-we-solve">
              <h2 className="problems-we-solve-header section-header">Why SHD</h2>
              <div className="deliv-card-blue">
                  <ul>
                    <li><strong>Field-First Mindset</strong> - Built from real prefab and VDC leadership experience</li>
                    <li><strong>Production-Focused</strong> - We prioritize labor savings and install efficiency</li>
                    <li><strong>Prefab-Driven</strong> - Maximize offsite construction opportunities</li>
                    <li><strong>Execution-Oriented</strong> - Deliverables designed for the people doing the work</li>
                  </ul>
                </div>
            </section>

            <section className="our-approach">
              <h2 className="our-approach-header section-header">The Result</h2>
              <div className="deliv-card-blue">
                <ul>
                  <li>Reduced labor hours</li>
                  <li>Increased prefab utilization</li>
                  <li>Improved schedule reliability</li>
                  <li>Less field rework</li>
                  <li>Better material control</li>
                </ul>
              </div>
            </section>
          </div>

        <div className="closing">
          <div className="cta">
           <h2>Let's Build Smarter</h2>
           <p>If your goal is to <strong>reduce field labor, increase prefab, and execute with precision</strong>, we're built to support you.</p>
          </div>

          <div className="signature">
            <h3>SHD Virtual Construction Partners</h3>
            <p><i>From Model to Field Execution</i></p>
          </div>
        </div>
      </div>

      

      <div className="footer">
        <div className="socials">
          <p>Follow us on Social Media!</p>
          <a href="https://www.linkedin.com/company/shd-virtual-construction">
            <img src={linkedinLogo} width="50px" />
          </a>
        </div>

        <div className="copyright">
          <p>© 2026 SHD Virtual Construction Partners LLC</p>
        </div>

        <div className="contact">
        {/*

          <p>Address</p>
          <p>Lexington, KY</p>
          <p>Phone Number</p>
          <p>Email</p>
        */}

        </div>
      </div>
    </>
  )
}

export default App