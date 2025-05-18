import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css'

// React Slick imports
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// MUI components
import { Box, Typography, Button } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isHoveringDownload, setIsHoveringDownload] = useState(false);

  // Refs for sections
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  // Refs for skill cards
  const skillCardRefs = useRef([]);

  // Data for skills, experiences, education
  const skills = [
    { name: 'JavaScript', level: 90, color: '#f0db4f', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
    { name: 'React', level: 85, color: '#61dbfb', logo: 'https://cdn.worldvectorlogo.com/logos/react-1.svg' },
    { name: 'HTML', level: 95, color: '#e34c26', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png' },
    { name: 'CSS', level: 95, color: '#e34c26', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png?20210705212817' },
    { name: 'Node.js', level: 75, color: '#68a063', logo: 'https://images.seeklogo.com/logo-png/37/1/nodejs-logo-png_seeklogo-373130.png' },
    { name: 'MongoDB', level: 70, color: '#4db33d', logo: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
  ];

  const experiences = [
    {
      company: 'Ratna Sagar Pvt. Ltd.',
      role: 'Frontend Developer',
      period: 'Nov 2022 - Present',
      description: 'Developing interactive educational platforms and LMS systems',
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: '2020 - 2022',
      description: 'Built various websites and web applications for clients',
    },
  ];

  const education = [
    {
      institution: "Lingaya's Vidyapeeth",
      degree: 'Master of Computer Applications',
      period: '2023 - 2025',
    },
    {
      institution: "Lingaya's Vidyapeeth",
      degree: 'Bachelor of Computer Applications',
      period: '2019 - 2022',
    },
  ];

  // Projects data
const projects = [
  {
    title: "Kidemy - LMS Platform",
    description: "A full-stack Learning Management System for kids featuring user authentication, course modules, quizzes, video lectures, and progress tracking.",
    image: "/assets/images/kidemy-lms.jpg",
    link: "#",
  },
  {
    title: "Educational Games (Word Search, Crossword, Jump Game)",
    description: "A suite of interactive JavaScript-based games designed to enhance vocabulary and cognitive skills in a fun, engaging way.",
    image: "/assets/images/edu-games.jpg",
    link: "#",
  },
  {
    title: "FileSwap - Electron App",
    description: "A desktop utility app that replaces CDN links in HTML files with local assets using Electron and Node.js.",
    image: "/assets/images/fileswap.jpg",
    link: "#",
  },
  {
    title: "Image Search Engine",
    description: "A React-based application that fetches and displays images from an external API with a responsive UI and keyword search functionality.",
    image: "/assets/images/image-search.jpg",
    link: "#",
  },
];


  // Entrance animations on mount
  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, y: 20, duration: 1 });
    gsap.from(headerRef.current, { opacity: 0, x: -20, duration: 1, delay: 0.2 });
    gsap.from(skillsRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.4 });
    gsap.from(experienceRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.6 });
    gsap.from(educationRef.current, { opacity: 0, y: 20, duration: 1, delay: 0.8 });
  }, []);

  // Animate sections on scroll
  useEffect(() => {
    if (skillsRef.current) {
      gsap.from(skillsRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      });
    }
    if (experienceRef.current) {
      gsap.from(experienceRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 80%',
        },
      });
    }
    if (educationRef.current) {
      gsap.from(educationRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  // Skill card hover animations
  const handleSkillHover = (index) => {
    if (skillCardRefs.current[index]) {
      gsap.to(skillCardRefs.current[index], {
        scale: 1.07,
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        duration: 0.3,
      });
    }
  };
  const handleSkillOut = (index) => {
    if (skillCardRefs.current[index]) {
      gsap.to(skillCardRefs.current[index], {
        scale: 1,
        boxShadow: 'none',
        duration: 0.3,
      });
    }
  };

  // Slider settings for React Slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  // Projects component with React Slick
  const Projects = () => (
    <Box
      id="projects"
      sx={{
        padding: "50px 0",
        background: "linear-gradient(135deg, #1f4037, #99f2c8)",
        color: "#fff",
      }}
    >
      <Box sx={{ width: '90%', margin: '0 auto' }}>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                padding: 2,
              }}
            >
              {/* Optional Image */}
              {/* <Box
                sx={{
                  height: "60%",
                  width: "100%",
                  maxWidth: "800px",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              ></Box> */}
              {/* Content */}
              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "#fff" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "15px",
                    color: "#e0e0e0",
                  }}
                >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  href={project.link}
                  sx={{
                    backgroundColor: "#FF6F61",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#e8584f",
                    },
                  }}
                >
                  View Project
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );

  return (
    <div className="about-container" ref={containerRef}>
      <div className="about-card">
        {/* Header Section */}
        <div className="about-header" ref={headerRef}>
          {/* Profile Image */}
          <div
            className="profile-image-container"
            onMouseEnter={() =>
              gsap.to('.profile-image-container', {
                scale: 1.1,
                boxShadow: '0 0 20px #00f',
                duration: 0.3,
                transformOrigin: 'center',
              })
            }
            onMouseLeave={() =>
              gsap.to('.profile-image-container', {
                scale: 1,
                boxShadow: 'none',
                duration: 0.3,
              })
            }
          >
            <div className="profile-image">
              <div className="profile-initials">RK</div>
              <div className="profile-icon"><img className='HiiAvater' src='../../public/img/Hi.gif'/></div>
            </div>
          </div>
          {/* Name & Role */}
          <div className="header-text">
            <h1>Rajiv Kumar</h1>
            <h2>
              I'm a <span className="typing-text">Web Developer</span>
              <span className="cursor">|</span>
            </h2>
            {/* Social Icons */}
            <div className="social-links">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="social-icon"
                  onMouseEnter={(e) =>
                    gsap.to(e.currentTarget, {
                      y: -3,
                      scale: 1.05,
                      boxShadow: '0 0 8px #00f',
                      duration: 0.3,
                    })
                  }
                  onMouseLeave={(e) =>
                    gsap.to(e.currentTarget, {
                      y: 0,
                      scale: 1,
                      boxShadow: 'none',
                      duration: 0.3,
                    })
                  }
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="about-nav">
          {['about', 'skills', 'experience', 'education', 'projects'].map((section) => (
            <button
              key={section}
              className={`nav-btn ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0 })}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <div className="about-content">
          {activeSection === 'about' && (
            <div className="section about-section">
              <h3>Who Am I?</h3>
              <p>
                I'm a passionate frontend developer with 3+ years of experience creating interactive and user-friendly web applications. I specialize in React and modern JavaScript ecosystems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
              </p>
              <div className="fun-facts">
                <h4>Fun Facts About Me:</h4>
                <ul>
                  <li>🏆 Won multiple hackathons</li>
                  <li>🌱 Currently learning Three.js</li>
                  <li>☕ Coffee enthusiast</li>
                  <li>🎮 Love building game UIs</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="section skills-section" ref={skillsRef}>
              <h3>My Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-card"
                    ref={(el) => (skillCardRefs.current[index] = el)}
                    onMouseEnter={() => handleSkillHover(index)}
                    onMouseLeave={() => handleSkillOut(index)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-logo-container">
                      <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="section experience-section" ref={experienceRef}>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.company}</h4>
                    <h5 className="role">{exp.role}</h5>
                    <span className="timeline-period">{exp.period}</span>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'education' && (
            <div className="section education-section" ref={educationRef}>
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="edu-icon">🎓</div>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <p className="period">{edu.period}</p>
                </div>
              ))}
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && <Projects />}
        </div>

        {/* Download Resume Button */}
        <div
          className="about-footer"
          onMouseEnter={() => setIsHoveringDownload(true)}
          onMouseLeave={() => setIsHoveringDownload(false)}
        >
          <button
            className="download-btn"
            style={{
              background: isHoveringDownload
                ? 'linear-gradient(45deg, #3a0ca3, #4361ee)'
                : 'linear-gradient(45deg, #4361ee, #3a0ca3)',
            }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -5,
                boxShadow: '0 15px 30px rgba(67, 97, 238, 0.4)',
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                boxShadow: 'none',
                duration: 0.3,
              });
            }}
          >
            <span>Download Resume</span>
            <span className="download-icon" style={{ marginLeft: '8px' }}>↓</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;