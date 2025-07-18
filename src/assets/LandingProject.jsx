import React from "react";

export const LandingProjects = () => {
  return (
    <div className="landing-projects-section">
      <h4 className="landing-projects-title">
        Landing Page Projects includes Projects Made Using React
      </h4>

      <ul className="landing-projects-list">

        <li className="landing-project-card">
          <img
            src="https://i.ibb.co/twWhcnV6/Landing-1.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            I developed a fully responsive e-commerce website using React.js, showcasing my skills in frontend development and API integration. The website features a modern and intuitive user interface, allowing users to browse products seamlessly across multiple pages. Key Features: React Router: Implemented React Router to create a multi-page application.
          </p>
          <a
            href="https://products-e-commerce-wpxm.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://products-e-commerce-wpxm.vercel.app/
          </a>
        </li>

        <li className="landing-project-card">
          <img
            src="https://i.ibb.co/B501cXbS/Landing2.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            A React project made using raw data with the help of hooks and various functionalities (click events, search bar, home, about us, contact).
          </p>
          <a
            href="https://react-recipepage.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://react-recipepage.netlify.app/
          </a>
        </li>

        <li className="landing-project-card">
          <img
            src="https://i.ibb.co/G34T0VXy/Landing-3.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            A Landing project made using various React functionalities, including hooks and interactive buttons.
          </p>
          <a
            href="https://chic-hummingbird-aba609.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://chic-hummingbird-aba609.netlify.app/
          </a>
        </li>

        <li className="landing-project-card">
          <img
            src="https://i.ibb.co/23hgJ3rF/Landing-4.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            A basic React project featuring a search bar and a dark/light mode toggle, implemented using hooks.
          </p>
          <a
            href="https://basic-reactpage.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://basic-reactpage.netlify.app/
          </a>
        </li>
      </ul>
    </div>
  );
};
