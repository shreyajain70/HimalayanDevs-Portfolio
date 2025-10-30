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
            src="/BeautyPageui.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            This Beauty Parlour Landing Page is a visually elegant and user-friendly web design created to showcase a modern salon’s services with style and sophistication. Built with a focus on luxury aesthetics, smooth user experience, and responsive layout, the page reflects the brand’s promise of beauty, care, and confidence.
          </p>
          <a
            href="https://seemabeautyparlour.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://seemabeautyparlour.netlify.app/
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
            src="/TeacherPortfolioui.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
            Dedicated, passionate, and creative — this teacher portfolio highlights a journey of inspiring young minds and fostering a love for learning. With a focus on innovative teaching methods, personalized student engagement, and continuous growth, this portfolio showcases lesson plans, achievements, certifications, and classroom projects that reflect a commitment to academic excellence.
          </p>
          <a
            href="https://nikitathapaporfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
            https://nikitathapaporfolio.netlify.app/
          </a>
        </li>

        <li className="landing-project-card">
          <img
            src="/DigitalMenuui.png"
            className="Landing-project-image"
          />
          <p className="landing-project-desc">
          The Digital Menu is an interactive and user-friendly platform designed to replace traditional paper menus with a sleek digital experience. It allows customers to explore food categories, view detailed descriptions, prices, and images.
          </p>
          <a
            href="https://kingskitchen-digitalmenu.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-project-link"
          >
          https://kingskitchen-digitalmenu.netlify.app/
          </a>
        </li>

      </ul>
    </div>
  );
};
