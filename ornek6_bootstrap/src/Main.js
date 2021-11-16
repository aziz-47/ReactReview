import React from "react";
import { Card, Button } from "react-bootstrap";

function Kart() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>
            React kursumuzda A'dan Z'ye herseyi goreceksiniz
          </Card.Text>
          <Button variant="danger">DETAYLAR</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Main() {
  return (
    <div>
      <Kart />
      <Kart />
      <Kart />
    </div>
  );
}

export default Main;
