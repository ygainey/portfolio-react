import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNpm, FaPython, FaGithub } from 'react-icons/fa'
import { SiPostman, SiExpress, SiDjango, SiPostgresql, SiMongodb, SiMongoose } from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Technical Skills & Tooling</h2>
            <div className="article-container">
              <article>
                <FaHtml5 size={50} />
                <h3>HTML5</h3>
              </article>
              <article>
                <FaCss3Alt size={50} />
                <h3>CSS3</h3>
              </article>
              <article>
                <FaJs size={50} />
                <h3>JavaScript</h3>
              </article>
              <article>
                <FaReact size={50} />
                <h3>React.js</h3>
              </article>
              <article>
                <FaNodeJs size={50} />
                <h3>Node.js</h3>
              </article>
              <article>
                <SiExpress size={50} />
                <h3>Express.js</h3>
              </article>
              <article>
                <FaPython size={50} />
                <h3>Python</h3>
              </article>
              <article>
                <SiDjango size={50} />
                <h3>Django</h3>
              </article>
              <article>
                <SiPostgresql size={50} />
                <h3>PostgreSQL</h3>
              </article>
              <article>
                <SiMongodb size={50} />
                <h3>MongoDB</h3>
              </article>
              <article>
                <SiMongoose size={50} />
                <h3>Mongoose</h3>
              </article>
              <article>
                <FaNpm size={50} />
                <h3>NPM</h3>
              </article>
              <article>
                <FaGithub size={50} />
                <h3>Github</h3>
              </article>
              <article>
                <SiPostman size={50} />
                <h3>Postman</h3>
              </article>
            </div>
          </div>
          {/* <div className="details-container">
            <h2 className="experience-sub-title">Backend Development & Tooling</h2>
            <div className="article-container">
              <article>
              </article>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;