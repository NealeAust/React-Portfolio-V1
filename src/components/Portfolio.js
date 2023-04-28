import React from 'react';
import '../App.css'
import passGenpic from "../images/Password-Generator.png"

// Six cards displaying an image of the home page of an application I created, PLUS
// Links to a web application and applicable Github repository.
function Portfolio() {
  return (
    <div>
      <div className="card" >
        <h4 >Password Generator</h4>
        <a href="https://nealeaust.github.io/Password-Generator/">Web Application</a>
        <a href="https://github.com/NealeAust/Password-Generator">Github Repository</a>
        <img src={passGenpic}alt="Password Generator" />
      </div>

      <div className="card" >
        <h4 >Timed Code Quiz</h4>
        <a href="https://nealeaust.github.io/Timed-Code-Quiz/">Web Application</a>
        <a href="https://github.com/NealeAust/Timed-Code-Quiz">Github Repository</a>
        <img src="/images/Timed-Quiz.jpg" alt="Timed Code quiz" />
      </div>

      <div className="card" >
        <h4 >Weather Dashboard</h4>
        <a href="https://nealeaust.github.io/Weather-Dashboard/">Web Application</a>
        <a href="https://github.com/NealeAust/Weather-Dashboard">Github Repository</a>
        <img src="/images/Weather-Dashboard.jpg" alt="Weather Dashboard" />
      </div>

      <div className="card" >
        <h4 >Note Taker</h4>
        <a href="https://peaceful-chamber-86288.herokuapp.com/notes">Web Application</a>
        <a href="https://github.com/NealeAust/Note-Taker">Github Repository</a>
        <img src="/images/Note-Taker.jpg" alt="Note Taker" />
      </div>

      <div className="card" >
        <h4 >MVC Tech Blog</h4>
        <a href="https://limitless-beach-81711.herokuapp.com/">Web Application</a>
        <a href="https://github.com/NealeAust/neale-mvc-tech-blog">Github Repository</a>
        <img src="/images/MVC-Tech-Blog.jpg" alt="MVC Tech Blog" />
      </div>


      <div className="card" >
        <h4 >PWA Text Editor</h4>
        <a href="https://nc-pwa-text-editor.herokuapp.com/">Web Application</a>
        <a href="https://github.com/NealeAust/PWA-Text-Editor">Github Repository</a>
        <img src="/images/PWA-Text-Editor.jpg" alt="PWA Text Editor" />
      </div>

    </div>
  )
};

export default Portfolio;