const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1727357787/port-image-2_f3t6vt.jpg" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h3>Professional Development</h3>
              <p>General Assembly<br />Software Engineering Bootcamp<br />Jun - Aug 2024 <br /> 12 weeks (420 hours)</p>
            </div>
            <div className="details-container">
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />Computer Science <br />King's College London <br />2014</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello! I’m Yousef, a software engineer with a lifelong interest in technology. My journey into tech began with a degree in computer science, but due to health challenges during university, 
              I took some time away from my studies. During this time, I moved into a career in recruitment, where I found success but always felt the pull to return to my roots in tech. Knowing my 
              true passion lay in coding, I eventually decided to take the leap and pursue software engineering full-time.
              <br /><br />
              After completing the General Assembly Software Engineering Bootcamp, I quickly immersed myself in the world of JavaScript, React, Node.js and Django, building projects that push my skills 
              and creativity. My recruitment background gives me a unique perspective on user needs and business objectives, allowing me to approach development with both technical and human-centered insights.
              <br /><br />
              As I continue on this path, I’m excited to take on projects that make a tangible difference, whether it’s through problem-solving or innovation. Thanks for stopping by, and feel free to reach out if 
              you’d like to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;