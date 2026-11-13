import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:taybe00mse@gmail.com" data-cursor="disable">
                taybe00mse@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span style={{ color: "#adacac" }}>Rajshahi, Bangladesh</span>
            </p>
            <h4 style={{ marginTop: "12px" }}>Institution</h4>
            <p>
              <span style={{ color: "#adacac" }}>
                Rajshahi University of Engineering & Technology (RUET)
              </span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Academic & Social</h4>
            <a
              href="https://linkedin.com/in/md-taybe-hossin-jony-751685414"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Google Scholar <MdArrowOutward />
            </a>
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              ORCID <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Md Tayve Hossin Jony</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Md Tayve Hossin Jony
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
