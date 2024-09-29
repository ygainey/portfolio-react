import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <FaEnvelope />
          <p><a href="mailto:yousef.gainey@gmail.com">yousef.gainey@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <i className="devicon-linkedin-plain colored"></i>
          <p><a href="https://www.linkedin.com/in/yousef-g-69019952/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;