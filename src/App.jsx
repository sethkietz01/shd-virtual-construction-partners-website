import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import sampleImage from './assets/sample-image.jpg';
import sampleImage2 from './assets/sample-image-2.jpg';
import sampleImage3 from './assets/sample-image-3.jpg';
import './App.css';

const PORTFOLIO_IMAGES = [
  { src: sampleImage, alt: "BIM Electrical Prefabrication Blueprint Layout" },
  { src: sampleImage2, alt: "Virtual Construction Spool Drawings Example" },
  { src: sampleImage3, alt: "Field Ready Work Package Deployment Visual" }
];

const PROBLEMS = [
  { id: "comm", title: "Communication", desc: "Crews waiting on incomplete or unclear information." },
  { id: "mat", title: "Material Flow", desc: "Material waste and field re-handling." },
  { id: "det", title: "Detailing", desc: "Limited prefabrication due to lack of detail." },
  { id: "seq", title: "Sequencing", desc: "Rework caused by coordination gaps." },
  { id: "exec", title: "Execution", desc: "Disconnect between BIM and field execution." }
];

const DELIVERABLES = [
  { id: "bom", title: "Field-Ready BOMs", details: ["Install package-specific lists", "Spool-level quantity breakdowns", "Zone-based organization", "Supports kitting, staging, and tracking"], note: "Material shows up ready to install, not sorted in the field" },
  { id: "prefab", title: "Prefabrication Packages", details: ["Conduit reach & trapeze drawings", "Assembly sheets with dimensions", "Kit-of-parts definitions", "Labor-aligned detailing"], note: "We define how it's built, not just how it looks" },
  { id: "spool", title: "Spooling & Installation Drawings", details: ["Area and system-based spooling", "Clear, field-friendly layouts", "Install sequencing support", "Minimized field measuring"], note: "Crews install with confidence, not interpretation" },
  { id: "awp", title: "AWP-Aligned Work Packaging", details: ["Supports Workface Planning (WFP)", "Installation Work Packages (IWPs)", "Constraint-free, executable scopes"], note: "Every model output feeds a planned work package" }
];

const WHY_POINTS = [
  "Field-First Mindset: Built with 20+ years of combined real prefab and VDC leadership experience.",
  "Production-Focused: We prioritize labor savings and install efficiency.",
  "Prefab-Driven: We maximize offsite construction opportunities.",
  "Execution-Oriented: Deliverables designed for the people doing the work."
];

const RESULT_POINTS = [
  "Reduced labor hours",
  "Increased prefab utilization",
  "Improved schedule reliability",
  "Less field rework",
  "Better material control"
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const DELAY_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5, 
      staggerChildren: 0.5 
    }
  }
};

const DELAY_ITEM_VARIANTS = {
  hidden: { opacity: 0 }, 
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleScroll = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_IMAGES.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length);
    }
  };

  return (
    <div className="hook-statement">
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Built for Contractors.<br /> 
            <span className="text-highlight">Driven by the Field.</span>
          </motion.h1>

          <motion.div 
            variants={DELAY_CONTAINER_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hero-motion-container"
          >
            <div className="hero-grid">
              <motion.div variants={DELAY_ITEM_VARIANTS} className="status-quo">
                <h3>The Status Quo</h3>
                <p>Most BIM firms stop at coordination. We see it as only the beginning.</p>
              </motion.div>
              
              <motion.div variants={DELAY_ITEM_VARIANTS} className="shd-advantage">
                <h3>The SHD Advantage</h3>
                <p>We bridge the gap from modeling to field-ready installation...</p>
              </motion.div>
            </div>

            <motion.div variants={DELAY_ITEM_VARIANTS} className="hero-cta">
              <Link to="/contact" className="primary-cta-button">
                Talk to our Experts
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="portfolio-showcase" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            src={PORTFOLIO_IMAGES[currentIndex].src}
            alt={PORTFOLIO_IMAGES[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          />
        </AnimatePresence>

        <div className="gradient-overlay" />

        <div className="portfolio-content" style={{ position: 'relative', zIndex: 2 }}>
          <div className="text-overlay">
            <h2>Project Name</h2>
            <button className="view-case-study">View Case Study</button>
          </div>
        </div>

        <div className="portfolio-controls" style={{ zIndex: 3 }}>
          <button onClick={() => handleScroll('prev')} aria-label="Previous Project">❮</button>
          <button onClick={() => handleScroll('next')} aria-label="Next Project">❯</button>
        </div>
      </section>

      <section className="problem-solution-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="flow-container"
        >
          <div className="side-column problem">
            <h3>The Friction</h3>
            <p>Coordination gaps lead to field rework, material waste, and crews waiting for clarity.</p>
          </div>

          <div className="visual-connector">
            <span className="arrow" aria-hidden="true">→</span>
          </div>

          <div className="side-column approach">
            <h3>The SHD Flow</h3>
            <div className="steps">
              <span>Model</span> → <span>Spool</span> → <span>Prefab</span> → <span>Install</span>
            </div>
            <p>We convert models into production-ready packages, not just visualization.</p>
          </div>
        </motion.div>
      </section>

      <section className="who-we-are">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="who-we-are-container"
        >
          <h1 className="section-header">Who We Are</h1>
          
          <div className="shd-philosophy">
            <div className="philosophy-intro">
              <h3>We don’t deliver. We deploy.</h3>
              <p>Most virtual construction stops at delivery. That’s where the problems start. At SHD, we design with the field in mind—ensuring every model is an executable install plan.</p>
            </div>

            <div className="pillars-grid">
              <div className="pillar">
                <h4>Sequenced</h4>
                <p>We plan the installation flow, not just the geometry. Every model reflects real field access and install order.</p>
              </div>
              <div className="pillar">
                <h4>Hand-Off</h4>
                <p>We translate models into prefab-ready, field-usable packages. Spools, racks, and layouts built for crews.</p>
              </div>
              <div className="pillar">
                <h4>Deployment</h4>
                <p>What we produce installs cleanly the first time. Less guesswork. Less rework. More production.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="problems-we-solve-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">The Problems We Solve</h2>
        </motion.div>
        <motion.div 
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="problem-grid"
        >
          {PROBLEMS.map((item) => (
            <motion.div key={item.id} variants={ITEM_VARIANTS} className="problem-card">
              <div className="card-indicator" /> 
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="deliverables-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">Deliverables</h2>
        </motion.div>
        <motion.section 
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="deliverables-grid"
        >
          {DELIVERABLES.map((d) => (
            <motion.div 
              key={d.id} 
              variants={ITEM_VARIANTS} 
              className="deliverable-card" 
              whileHover={{ y: -5 }}
            >
              <div className="card-indicator" /> 
              <h3>{d.title}</h3>
              <ul>
                {d.details.map((detail, index) => <li key={`${d.id}-det-${index}`}>{detail}</li>)}
              </ul>
              <p className="note">{d.note}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>


      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="summary-motion-container"
        >
        <section className="summary-container">

          
            <div className="summary-col why-shd">
              <h3>Why SHD</h3>
              <ul>
                {WHY_POINTS.map((point, i) => <li key={`why-${i}`}>{point}</li>)}
              </ul>
            </div>
            
            <div className="summary-col the-result">
              <h3>The Result</h3>
              <ul className="results-list">
                {RESULT_POINTS.map((point, i) => <li key={`res-${i}`}>{point}</li>)}
              </ul>
            </div>
        </section>
      </motion.div>


      <section className="closing-container">
        <div className="cta-banner">
          <h2>Let's Build Smarter</h2>
          <p>If your goal is to reduce field labor, increase prefab, and execute with precision, we're built to support you.</p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;