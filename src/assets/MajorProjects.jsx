import React from "react";

export const MajorProjects = () => {
  return (
    <div className="major-projects-section">
      <ul className="major-projects-list">
        <li className="major-project-card">
          
      <h3 className="major-projects-title">Major React Projects</h3>
          <img
            src="https://i.ibb.co/fVPjTCkk/major-1.png"
            className="major-project-image"
            alt="QuizHub"
          />
          <p className="major-project-desc">
            A quiz game named <strong>QuizHub</strong>, featuring 6 subjects with 20 questions each. The results for each subject are categorized as high, medium, or low based on performance.
          </p>
          <a
            href="https://quizhubgame.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="major-project-link"
          >
            https://quizhubgame.netlify.app/
          </a>
        </li>
      </ul>
    </div>
  );
};
