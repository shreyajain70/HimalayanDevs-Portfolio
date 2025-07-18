import React from 'react';
import Skills from './Skills';
const Home = () => {
  return (
    <>
    
      <img
        className="logo"
        src="https://i.ibb.co/ymjmMzWQ/Chat-GPT-Image-Jul-4-2025-05-48-31-PM.png"
        height="300px"
        width="300px"
        alt="Himalayan Devs"
      />

      <section className="section home">
     <div className="MainHeading-div">
  <h1>
    {"Hey! We are Himalayan Dev's"
      .split(" ")
      .map((word, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
          {word}&nbsp;
        </span>
      ))}
  </h1>
  <br />
  <h2>
    {"Passionate Full Stack Developers"
      .split(" ")
      .map((word, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
          {word}&nbsp;
        </span>
      ))}
  </h2>
</div>


        <h1 className="MERN-HeadDiv">MERN</h1>

        <div className="cube">
          <div className="face front">JavaScript <img className='language-img' src='https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'></img></div>
          <div className="face back">BootStrap <img className='language-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhGETiCc_Hct6__P9a6iU9vs1DqRCDEiHNQ&s'></img></div>
          <div className="face left">Express-JS <img className='language-img' src='https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png'></img></div>
          <div className="face right">Node-JS <img className='language-img' src='https://logowik.com/content/uploads/images/node-js6304.logowik.com.webp'></img></div>
          <div className="face top">MongoDB<img className='language-img' src='https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2021/07/f5932bc2.jpg?q=70&fit=contain&w=1200&h=628&dpr=1'></img></div>
          <div className="face bottom">React<img className='language-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s'></img></div>  
        </div>
            
            <Skills></Skills>
      </section>




    </>
  );
};


export default Home;
