import React from 'react';
import {createRoot} from "react-dom/client"
import Home from "./Home";
import About from './About';
import Projects from './Projects';
import { ContactUs } from './Contact';

const App = () => {
  return (
    <div className="app-container">
      <Home />
      <About />
      <Projects />
     <ContactUs></ContactUs>
    </div>
  );
};

const Root = createRoot(document.getElementById("root"))
Root.render(<App></App>)


