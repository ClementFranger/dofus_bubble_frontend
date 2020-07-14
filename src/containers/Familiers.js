import React, { useState, useEffect } from "react";
import { ListGroup, Card } from "react-bootstrap";
import "./Crafts.css";
import { API } from "aws-amplify";

export default function Familiers() {

  const [familiersCraft, setFamiliersCraft] = useState([]);

  useEffect(() => {
    async function loadFamiliers() {
      const familiersCraft = await scanFamiliersPrice();
      setFamiliersCraft(familiersCraft.map((item, i) => computePlusValue(item)))
    }
    loadFamiliers()
  }, []);

  function scanFamiliersPrice() {
    return API.get("dofus_bubble", "/dofus_bubble/dofus/familiers/");
  }

  function computePlusValue(item) {
    item.value = Math.round(item.price / item.xp*100)/100;
    return item
  }

  function renderItems() {
    return familiersCraft.sort((a, b) => a.value > b.value ? 1 : -1).map((item, i) =>
      <ListGroup.Item key={i} variant="flush">
        <Card as="a" href={item.url} style={{ width: '18rem' }}>
          {/*TODO : add image to cart if possible (403 on dofus site)
          <Card.Img variant="top" src="https://static.ankama.com/dofus/www/game/items/200/6007.png"/>*/}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.value}</Card.Text>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <ListGroup>
        {renderItems()}
      </ListGroup>
    </>
  );
}
