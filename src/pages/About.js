import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../styles/About.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export default function About() {
  return (
    <>
      <Jumbotron className="jumbotron bg-transparent" fluid>
        <Container>
          <h1 id="CodingExp">Coding Experiment</h1>
          <p id="jumboText">
            My name is Teangelo Burks, a Full Stack Software Developer located in Michigan.
            I've always had a passion for designing aesthetically pleasing websites and applications.
            Luckily, Development has allowed me to express my creativity through many coding languages, frameworks, & technologies. During my studies of web development, I've learned to love both Frontend & Backend development equally. I have a natural curiosity for technology, and look forward to continuing my studies day after day.
    </p>
        </Container>
      </Jumbotron>
      <div className="iconCenter">
        <a href='https://www.linkedin.com/in/teangelo-burks-9516a2164/' target="#">
          <FaLinkedin /> </a>

        <a href="https://github.com/Teangelo1" target="#">
          <FaGithub />
        </a>

        <a href="../Images/Teangelo Burks Resume.pdf" target="#"><AiFillFileImage />
        </a>

        <a href="mailto:burks.teangelo@gmail.com" target="#">
          <MdEmail /> </a>
      </div>
    </>
  )
}
