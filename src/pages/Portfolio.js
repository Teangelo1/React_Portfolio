import Card from 'react-bootstrap/Card'
import React from 'react'
import amnesiaNull from '../Images/amnesiaNull.png'

export default function Portfolio() {
    return (
        <div>
            <Card className="bg-dark text-white">
  <Card.Img src={(amnesiaNull)} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Amnesia(Null)</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    )
}


