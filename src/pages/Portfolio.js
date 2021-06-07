import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Portfolio.css';
import amnesiaNull from '../Images/amnesiaNull.png';
import BudgetControl from '../Images/BudgetControl.png';
import restaurant from '../Images/restaurant.png'
import passwordGen from '../Images/passwordGen.png'
import CodingQuiz from '../Images/CodingQuiz.png'
import OpusApp from '../Images/OpusApp.png';
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
        <img src={(OpusApp)} alt="OpusAppPhoto" />
        <div>
          <h3>OPUS</h3>
          <p>
         Full Stack MERN Application that allows the perfect book experience for the user. User's will be able to find the Top 15 trending books for the current week. While also being able to search for a book of choice then add that book to a specific shelf and write reviews about what they may think of the book. <br />
            <br /> Technologies Used: HTML, CSS, JavaScript, React.JS, Node.JS, Express.JS, React-Bootstrap, and MySQL database. 
          </p>
          <a href="https://opus2021.herokuapp.com/" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/Opus.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(restaurant)} alt="RestaurantImage" />
        <div>
          <h3>Feeeed me!</h3>
          <p>
          Front-end Application that allows a user to find restaurants in their area based off a zip code/radius search with the option to favorite resturants that you may want to visit frequently. <br />
            <br /> Technologies Used: HTML, CSS, JavaScript, jQuery, Ajax, Foundation, Yelp API, and Google Maps API
          </p>
          <a href="https://teangelo1.github.io/restaurant-dashboard/" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/restaurant-dashboard.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(amnesiaNull)} alt="AmnesiaNullAppPhoto" />
        <div>
          <h3>Amnesia(Null)</h3>
          <p>
          Full Stack application that uses password authentication, This application will allow the user to Add an event with a Title, Start date/time, Duration, and Description, View Recently added events while also having the option to export your saved event into your mobile device. <br />
            <br /> Technologies used: Handlebars, Node.js, Express.js, MySQL, ICS package, CSS, JavaScript, Travis and Passport
          </p>
          <a href="https://agile-gorge-53521.herokuapp.com/members" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/rotesast.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(BudgetControl)} alt="BudgetControlImage" />
        <div>
          <h3>Budget Control</h3>
          <p>
          Full Stack application that allows the user to keep track of how much money is being saved or spent. <br />

          <br />Technologies Used: HTML/CSS, JavaScript, Chart.js, Node.js, Express.js, MongoDB/Mongoose, Mongo Atlas and Heroku

          </p>
          <a href="https://pure-taiga-35486.herokuapp.com/" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/Budget_Control.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(Fitness)} alt="FitnessApp" />
        <div>
          <h3>Fitness Tracking</h3>
          <p>
           Full Stack Application that allows the user to create or continue workouts and Track previous history.<br />
           Technologies Used: HTML/CSS, JavaScript, Node.js, Chart.js, Express.js, MongoDB/Mongoose, Mongo Atlas, and Heroku
          </p>
          <a href="https://warm-journey-95857.herokuapp.com/?id=6071b569a2c2a60015b11168" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/Workout_Tracker.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src={(passwordGen)} alt="SecurePasswordGenerator" />
        <div>
          <h3>Secure Password Generator</h3>
          <p>
          Front-end application that will generate a secure password between 8-128 characters giving the user the option to either add an uppercase or lowercase letter, number, and symbol. <br />
            <br /> Technologies Used: HTML, CSS, JavaScript
          </p>
          <a href="https://teangelo1.github.io/Fun_with_Password_Generator/" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/Fun_with_Password_Generator.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src={(CodingQuiz)} alt="CodingQuiz" />
        <div>
          <h3>Coding Quiz</h3>
          <p>
          Front-end Timed Quiz application to test your JavaScript Knowledge and generate a score at the end based off of how many questions were answered correctly. <br /> 
            <br /> Technologies Used: HTML, CSS, JavaScript
          </p>
          <a href="https://teangelo1.github.io/Coding-Quiz/" target="#" class="btn">View Project</a>
          <a href="https://github.com/Teangelo1/Coding-Quiz.git" target="#" class="btn">View Github Repo</a>
        </div>
      </section>
    </main>

    </>
  )

}
