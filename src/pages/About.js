import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../styles/About.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai';

export default function About() {
  return (
  <div>
      <Jumbotron className="jumbotron bg-transparent" fluid>
        <Container>
          <h1 id="CodingExp">Coding Experiment</h1>
          <p id="jumboText">
            My name is Teangelo Burks, a Full Stack Software Developer located in Michigan. Recently completed My Full Stack Web Development Bootcamp through Michigan State University.
            I've always had a passion for designing aesthetically pleasing websites and applications.
            Luckily, Development has allowed me to express my creativity through many coding languages, frameworks, & technologies. During my studies of web development, I've learned to love both Frontend & Backend development equally. I have a natural curiosity for technology, and look forward to continuing my studies day after day. <br />
            <br /> Email: burks.teangelo@gmail.com
    </p>

   <h2>Skills/Technologies:</h2>
<li>HTML/CSS</li>
<li>JavaScript</li>
<li>React.js</li>
<li>Node.js</li>
<li>Express Servers</li>
<li>jQuery</li>
<li>Bootstrap</li>
<li>API's</li>
<li>MySQL</li>
<li>MongoDB/Mongoose</li>
<li>Progressive Web Applications</li>
<li>Heroku Deployment</li>
<li>MERN</li>
   
    
   </Container>
      </Jumbotron>
      <div className="iconCenter">
        <a href='https://www.linkedin.com/in/teangelo-burks-9516a2164/' target="#">
          <FaLinkedin /> </a>

        <a href="https://github.com/Teangelo1" target="#">
          <FaGithub />
        </a>

        <a href={process.env.PUBLIC_URL + '/Teangelo-Burks-Resume1.pdf'} target="_blank" download><AiFillFileImage />
        </a>

        <a  href="mailto:burks.teangelo@gmail.com" target="#">
          <MdEmail /> </a>

          <a href='tel:3136493617' className="phone"><AiFillPhone className="phone"/></a>
          <div class="hide">Phone Number: 313-649-3617
          </div>
      </div>
   </div>
  )
}
