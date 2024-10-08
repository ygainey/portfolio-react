import React from 'react';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="https://res.cloudinary.com/dr9aiqtjj/image/upload/v1727357787/port-image-2_f3t6vt.jpg" alt="Profile picture" className="about-pic"/>
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h3>Professional Development</h3>
              <p>General Assembly<br />Software Engineering Bootcamp<br />Jun - Aug 2024: 12 weeks</p>
            </div>
            <div className="details-container">
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />Computer Science <br />King's College London <br />2014</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem
              nobis, nihil esse debitis maxime facere minus sint delectus velit in eos
              quo officiis explicabo deleniti dignissimos. Eligendi illum libero
              dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla,
              impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;