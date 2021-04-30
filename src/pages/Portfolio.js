import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Portfolio.css';
import amnesiaNull from '../Images/amnesiaNull.png';
import BudgetControl from '../Images/BudgetControl.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import "../styles/Portfolio.css";
// import * as ReactBootstrap from "react-bootstrap";
AOS.init();

export default function Portfolio() {
  return (
    <>
     <header class="main-header">
      <h1><span>Acrylic Painting</span> Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        quam!
      </p>
    </header>

    <main class="container">
      <section class="card">
        <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
        <div>
          <h3>Acrylic Painting One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src="https://i.ibb.co/3NHjDcW/paint-2.png" alt="" />
        <div>
          <h3>Acrylic Painting Two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src="https://i.ibb.co/0VywMkW/paint-3.png" alt="" />
        <div>
          <h3>Acrylic Painting Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </section>

      <section class="card" data-aos="fade-left">
        <img src="https://i.ibb.co/5LkJFRP/paint-4.png" alt="" />
        <div>
          <h3>Acrylic Painting Four</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </section>

      <section class="card" data-aos="fade-right">
        <img src="https://i.ibb.co/61R8Q2y/paint-5.png" alt="" />
        <div>
          <h3>Acrylic Painting Five</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
            enim laudantium, animi veniam libero eveniet culpa unde perferendis
            illo fugit corporis, voluptatibus totam dolorum, maiores magnam
            officia. Ab, delectus.
          </p>
          <a href="#" class="btn">Buy Now</a>
        </div>
      </section>
    </main>

    </>
  )

}
