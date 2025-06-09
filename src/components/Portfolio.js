import React, { useState, useEffect } from 'react';
import { Mail, Github, MapPin, Phone, Code, Database, Globe, GraduationCap, Award, Briefcase } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="logo">Prithu HS</div>
          <ul className="nav-links">
            {['home', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Prithu HS</h1>
          <p className="hero-subtitle">Computer Science Student & Aspiring Developer</p>
          <p className="hero-description">
            Passionate about creating innovative solutions through code. Currently pursuing my Bachelor's in Computer Science Engineering at Malnad College of Engineering, Hassan. Eager to contribute to meaningful projects and grow in the tech industry.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={18} />
              <span>prithu.hs@email.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Hassan, Karnataka</span>
            </div>
            <div className="contact-item">
              <Github size={18} />
              <span>GitHub Profile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">
          Education
          <div className="section-title-after"></div>
        </h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="education-title">Bachelor of Engineering</h3>
                <p className="education-subtitle">Computer Science</p>
              </div>
            </div>
            <div className="education-details">
              <div>
                <strong>Malnad College of Engineering, Hassan</strong>
                <br />
                <span className="education-period">Currently Pursuing</span>
              </div>
              <div className="cgpa-badge blue">
                CGPA: 8.0
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <Award size={24} />
              </div>
              <div>
                <h3 className="education-title">Diploma</h3>
                <p className="education-subtitle">Computer Science and Engineering</p>
              </div>
            </div>
            <div className="education-details">
              <div>
                <strong>Smt. L V (Govt) Polytechnic, Hassan</strong>
                <br />
                <span className="education-period">2019 - 2022</span>
              </div>
              <div className="cgpa-badge green">
                CGPA: 8.0
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="education-title">High School</h3>
                <p className="education-subtitle">Secondary Education</p>
              </div>
            </div>
            <div className="education-details">
              <div>
                <strong>St Philomena's Girls High School, Hassan</strong>
                <br />
                <span className="education-period">2019</span>
              </div>
              <div className="cgpa-badge orange">
                86.24%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">
          Skills
          <div className="section-title-after"></div>
        </h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <Code size={32} />
            </div>
            <h3 className="skill-title">Programming</h3>
            <ul className="skill-list">
              <li className="skill-item">Java</li>
              <li className="skill-item">C</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Globe size={32} />
            </div>
            <h3 className="skill-title">Web Development</h3>
            <ul className="skill-list">
              <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">JavaScript</li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Database size={32} />
            </div>
            <h3 className="skill-title">Database</h3>
            <ul className="skill-list">
              <li className="skill-item">MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">
          Projects
          <div className="section-title-after"></div>
        </h2>
        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <Briefcase size={24} />
            </div>
            <h3 className="project-title">Job Website</h3>
          </div>
          <p className="project-description">
            Developed an online job search website to connect job seekers with potential employers. 
            The platform features user-friendly interface, job posting capabilities, and search functionality 
            to help users find relevant employment opportunities efficiently.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Let's Connect</h2>
          <p className="footer-text">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
          <div className="social-links">
            <a href="mailto:prithu.hs@email.com" className="social-link">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="#" className="social-link">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Prithu HS. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;