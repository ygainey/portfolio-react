import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./assets/profile-pic.png" alt="John Doe profile picture" />
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
          <img 
            src="./assets/linkedin.png" 
            alt="My LinkedIn profile" 
            className="icon" 
            onClick={() => window.open('https://linkedin.com/', '_blank')}
          />
          <img 
            src="./assets/github.png" 
            alt="My Github profile" 
            className="icon" 
            onClick={() => window.open('https://github.com/', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;