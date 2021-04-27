import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import '../styles/About.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai'

export default function About() {
    return (
      <>
        <Jumbotron className="jumbotron bg-transparent" fluid>
  <Container>
    <h1 id="CodingExp">Coding Experiment</h1>
    <p id="jumboText">
     My Name is Teangelo Burks, I'm a Full Stack Software Developer located in Michigan. 
     I've always had the passion for designing things to be aesthetically pleasing, Luckily Development has allowed me to express my creativity through many coding languages, frameworks & Technologies.
     During my studies of web development, i've learned to love both Frontend/Backend Development equally. I have natural curiosity for Technology and look forward to continuing my studies day after day
    </p>
  </Container>
</Jumbotron>

<a href='www.youtube.com'>
<FaLinkedin /> </a>


<FaGithub /> 

<AiFillFileImage />
</>
    )
}
