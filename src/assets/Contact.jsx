import React from "react";

export const ContactUs = () => {
  return (
    <>
    <hr className="Footer-Line"></hr>
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-label">Instagram</span>
              <a 
                href="https://www.instagram.com/thehimalayandevs712?igsh=aXpuMHBteGpxNG1w"
                className="contact-link"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s"
                  alt="Instagram"
                  className="contact-icon"
                />
              </a>
            </li>

            <li className="contact-item">
              <span className="contact-label">Email</span>
              <a 
                href="mailto:thehimalayandevs712@gmail.com"
                className="contact-link"
              >
                <img
                  src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg"
                  alt="Email"
                  className="contact-icon"
                />
              </a>
            </li>
          </ul>

          <div className="contact-number">
            <h3>Contact - 7591035124</h3>
          </div>

          <div className="footer-bottom">
            &copy; 2025 The Himalayan Devs. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};
