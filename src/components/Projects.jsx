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
              <img src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1741186268/netflix_clone_dvonza.png" alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Netflix Clone</h2>
            <p>Note: Known issue with login, working to fix. Hosted site not currently available until fixed. <br /> This is a clone of Netflix built in MERN stack using a monorepo codebase. This is a post course project.</p>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/ygainey/netflix-clone', '_blank')}>
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
              It was built using React on the Front-End, Django and PostgreSQL on the Back-End.
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