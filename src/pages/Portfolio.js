import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Portfolio.css';
import amnesiaNull from '../Images/amnesiaNull.png';
import BudgetControl from '../Images/BudgetControl.png';
import restaurant from '../Images/restaurant.png'
import passwordGen from '../Images/passwordGen.png'
import CodingQuiz from '../Images/CodingQuiz.png'
import "../styles/Portfolio.css";
import Fitness from '../Images/Fitness.jpg';
AOS.init();

export default function Portfolio() {
  return (
    <>
     <header class="main-header">
      <h1><span>Project</span> Gallery</h1>
    </header>

    <main class="container">
      <section class="card">
        <img src={(restaurant)} alt="" />
        <div>
          <h3>Fooood!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(amnesiaNull)} alt="" />
        <div>
          <h3>Amnesia(Null)</h3>
          <p>
          An Application that uses password authentication, This application will allow the user to Add an event with a Title, Start date/time, Duration, and Description, View Recently added events while also having the option to export your saved event into your mobile device. <br />
            <br /> Technologies used: Handlebars, Node.js, Express.js, MySQL, ICS package, CSS, JavaScript, Travis and Passport.
          </p>
          <a href="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(BudgetControl)} alt="" />
        <div>
          <h3>Budget Control</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" >View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(Fitness)} alt="" />
        <div>
          <h3>Fitness Tracking</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(passwordGen)} alt="" />
        <div>
          <h3>Secure Password Generator</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(CodingQuiz)} alt="" />
        <div>
          <h3>Coding Quiz</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#">View Project</a>
        </div>
      </section>
    </main>

    </>
  )

}
