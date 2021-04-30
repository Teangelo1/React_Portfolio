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
          <h3>Feeeed me!</h3>
          <p>
          Frontend Application that allows a user to find restaurants in their area based off a zip code/radius search with the option to favorite resturants that you may want to visit frequently. <br />
            <br /> Technologies Used: HTML, CSS, JavaScript, jQuery, Ajax, Foundation, Yelp API, and Google Maps API
          </p>
          <a href="https://teangelo1.github.io/restaurant-dashboard/" target="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(amnesiaNull)} alt="" />
        <div>
          <h3>Amnesia(Null)</h3>
          <p>
          Full-Stack application that uses password authentication, This application will allow the user to Add an event with a Title, Start date/time, Duration, and Description, View Recently added events while also having the option to export your saved event into your mobile device. <br />
            <br /> Technologies used: Handlebars, Node.js, Express.js, MySQL, ICS package, CSS, JavaScript, Travis and Passport
          </p>
          <a href="https://agile-gorge-53521.herokuapp.com/members" target="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(BudgetControl)} alt="" />
        <div>
          <h3>Budget Control</h3>
          <p>
          Full-Stack application that allows the user to keep track of how much money is being saved or spent. <br />

          <br />Technologies Used: HTML/CSS, JavaScript, Chart.js, Node.js, Express.js, MongoDB/Mongoose, Mongo Atlas and Heroku

          </p>
          <a href="https://pure-taiga-35486.herokuapp.com/" target="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(Fitness)} alt="" />
        <div>
          <h3>Fitness Tracking</h3>
          <p>
           Full-Stack Application that allows the user to create or continue workouts and Track previous history.<br />
           Technologies Used: HTML/CSS, JavaScript, Node.js, Chart.js, Express.js, MongoDB/Mongoose, Mongo Atlas, and Heroku
          </p>
          <a href="https://warm-journey-95857.herokuapp.com/?id=6071b569a2c2a60015b11168" target="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(passwordGen)} alt="" />
        <div>
          <h3>Secure Password Generator</h3>
          <p>
          Frontend application that will generate a secure password between 8-128 characters giving the user the option to either add an uppercase or lowercase letter, number, and symbol. <br />
            <br /> Technologies Used: HTML, CSS, JavaScript
          </p>
          <a href="https://teangelo1.github.io/Fun_with_Password_Generator/" target="#" class="btn">View Project</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(CodingQuiz)} alt="" />
        <div>
          <h3>Coding Quiz</h3>
          <p>
          Frontend Timed Quiz application to test your JavaScript Knowledge and generate a score at the end based off of how many questions were answered correctly. <br /> 
            <br /> Technologies Used: HTML, CSS, JavaScript
          </p>
          <a href="https://teangelo1.github.io/Coding-Quiz/" target="#" class="btn">View Project</a>
        </div>
      </section>
    </main>

    </>
  )

}
