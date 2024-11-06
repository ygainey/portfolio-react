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
              <img src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1728298518/minesweeperv1_nsgr3q.png" alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Minesweeper</h2>
            <p>
              This is a refactored version of my week 2 GA bootcamp project. We were tasked to build a game in core Javascript, I opted for the windows classic "Minesweeper".
              Post course it was refactored using React.
            </p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti deserunt dolor porro beatae explicabo harum debitis at alias doloremque temporibus autem fugit, sunt perspiciatis. Tempora aperiam recusandae itaque quasi!</p>
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
              <img src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1728298518/AIpplicant-portv1_u6rutr.png" alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">AIpplicant</h2>
            <p>
              AIpplicant is an designed to help users track job applications and then generate a cover letter using ChatGPT and user datapoints. 
              It was build using React on the Front-End, Django and PostgreSQL on the Back-End.
            </p>
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