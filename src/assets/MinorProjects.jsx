import React from "react";

export const MinorProjects = () => {
    return (
        <div className="minor-projects-section">
            <h3 className="minor-projects-title">Projects made using HTML+CSS+JavaScript</h3>
            <ul className="minor-projects-list">
                <li className="minor-project-card">
                    <img
                        src="https://i.ibb.co/m562vX6C/hogward-proj.png" 
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        A registration form is created that stores information in local storage, and a login page is also implemented. The login result is shown in the console.
                    </p>
                    <p>
                        <a
                            href="https://hregistrationform.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            https://hregistrationform.netlify.app/
                        </a>
                    </p>
                </li>

                <li className="minor-project-card">

                    <img
                        src="https://i.ibb.co/84dWQB7d/J-recipe-Page.png" 
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        A recipe page made through fetch (API) and a functionality is added in the login button using JS.
                    </p>
                    <p>
                        <a
                            href="https://cheerful-praline-6d2357.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            https://cookingrecipe-page.netlify.app/
                        </a>
                    </p>
                </li>

                <li className="minor-project-card">
                    <img
                      src="https://i.ibb.co/h1RNbhw0/todo-list.png" 
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        This Todo App project is a feature-rich JavaScript application designed to help users manage their tasks efficiently. It includes key features such as preventing duplicate entries, marking tasks as completed with checkboxes, and a delete option for removing tasks. The app is built with modern web technologies to deliver a seamless user experience.
                    </p>
                    <p>
                        <a
                            href="https://dhimanharsh.github.io/todo-app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            https://dhimanharsh.github.io/todo-app/
                        </a>
                    </p>
                </li>

                <li className="minor-project-card">
                    <img
                       src="https://i.ibb.co/84mwGBg2/jessica-proj.png" 
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        A simple project, made from FrontEnd Mentor with HTML and CSS only.
                    </p>
                    <p>
                        <a
                            href=" http://fanciful-paletas-3c8cd0.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            http://fanciful-paletas-3c8cd0.netlify.app/
                        </a>
                    </p>
                </li>
                <li className="minor-project-card">
                    <img
                        src="https://i.ibb.co/MkQ6QkjJ/rating-card.png" 
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        Made using JS, a rating card with a functionality of showing rating number you clicked on.
                    </p>
                    <p>
                        <a
                            href="https://ratingcard-page.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            https://ratingcard-page.netlify.app/
                        </a>
                    </p>
                </li>
                <li className="minor-project-card">
                    <img
                        src="https://i.ibb.co/zWbLV4Qs/last-minor-porject.png"
                        alt="Registration form project screenshot"
                        className="minor-project-image"
                    />
                    <p className="minor-project-desc">
                        A simple project made from frontEnd Mentor.
                    </p>
                    <p>
                        <a
                            href="https://dhimanharsh.github.io/tech-book-club-landing-page/#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="minor-project-link"
                        >
                            https://dhimanharsh.github.io/tech-book-club-landing-page/#
                        </a>
                    </p>
                </li>

            </ul>
        </div>
    );
};
