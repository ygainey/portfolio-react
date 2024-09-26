const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img className="section__pic-image" src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1727356595/port-image-1v.2_cpss4a.jpg" alt="Yousef Gainey's profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Yousef Gainey</h1>
        <p className="section__text__p2">Junior Web Engineer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/resume.pdf')}>
            Download CV
          </button>
          <a href="#contact" className="btn btn-color-1">
            Contact Info
          </a>
        </div>
        <div id="socials-container">
          <i className="devicon-linkedin-plain colored"></i>
          <p><a href="https://www.linkedin.com/in/yousef-g-69019952/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <i className="devicon-github-original colored"></i>
          <p><a href="https://github.com/ygainey" target="_blank" rel="noopener noreferrer">Github</a></p>
        </div>
      </div>
    </section>
  );
};

export default Profile;