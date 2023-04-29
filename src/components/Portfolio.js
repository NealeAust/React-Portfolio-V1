import React from 'react';
import '../App.css'
import passGenpic from "../images/Password-Generator.png"
import timQuizpic from "../images/Timed-Quiz.jpg"
import weathDashpic from "../images/Weather-Dashboard.jpg"
import noteTakerpic from "../images/Note-Taker.jpg"
import mvcTechBlogpic from "../images/MVC-Tech-Blog.jpg"
import pwaTxtEdpic from "../images/PWA-Text-Editor.jpg"

// Six cards displaying an image of the home page of an application I created, PLUS
// Links to a web application and applicable Github repository.
function Portfolio() {
  return (
    <div>
      <div className="card" >
        <h4 >Password Generator</h4>
        <a href="https://nealeaust.github.io/Password-Generator/">Web Application</a>
        <a href="https://github.com/NealeAust/Password-Generator">Github Repository</a>
        <img src={passGenpic} alt="Password Generator" />
      </div>

      <div className="card" >
        <h4 >Timed Code Quiz</h4>
        <a href="https://nealeaust.github.io/Timed-Code-Quiz/">Web Application</a>
        <a href="https://github.com/NealeAust/Timed-Code-Quiz">Github Repository</a>
        <img src= {timQuizpic} alt="Timed Code quiz" />
      </div>

      <div className="card" >
        <h4 >Weather Dashboard</h4>
        <a href="https://nealeaust.github.io/Weather-Dashboard/">Web Application</a>
        <a href="https://github.com/NealeAust/Weather-Dashboard">Github Repository</a>
          <img src={weathDashpic} alt="Weather Dashboard" />
      </div>

      <div className="card" >
        <h4 >Note Taker</h4>
        <a href="https://peaceful-chamber-86288.herokuapp.com/notes">Web Application</a>
        <a href="https://github.com/NealeAust/Note-Taker">Github Repository</a>
        <img src={noteTakerpic} alt="Note Taker" />
      </div>

      <div className="card" >
        <h4 >MVC Tech Blog</h4>
        <a href="https://limitless-beach-81711.herokuapp.com/">Web Application</a>
        <a href="https://github.com/NealeAust/neale-mvc-tech-blog">Github Repository</a>
        <img src= {mvcTechBlogpic} alt="MVC Tech Blog" />
      </div>


      <div className="card" >
        <h4 >PWA Text Editor</h4>
        <a href="https://nc-pwa-text-editor.herokuapp.com/">Web Application</a>
        <a href="https://github.com/NealeAust/PWA-Text-Editor">Github Repository</a>
        <img src= {pwaTxtEdpic} alt="PWA Text Editor" />
      </div>

    </div>
  )
};

export default Portfolio;