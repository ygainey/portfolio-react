import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-1.png" alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/ygainey/minesweeper-react', '_blank')}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://yg-minesweeper-react.netlify.app/', '_blank')}>
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-2.png" alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com', '_blank')}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://example.com', '_blank')}>
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src="./assets/project-3.png" alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Three</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => { window.open('https://github.com/ygainey/aipplicant-react-fe', '_blank'); window.open('https://github.com/ygainey/aipplicant-django-be', '_blank'); }}>
                Github
              </button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://aipplicant.netlify.app/', '_blank')}>
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;