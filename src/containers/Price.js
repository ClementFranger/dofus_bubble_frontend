import React, { useState, useEffect } from "react";
import { ListGroup, Card } from "react-bootstrap";
import { API } from "aws-amplify";

export default function Reminders() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const items = await scanItemsCraft();
      console.log(items)
      setItems(items)
    }
    loadItems()
  }, []);

  function scanItemsCraft() {
    return API.get("dofus_bubble", "/dofus_bubble/dofus");
  }

  function computePlusValue(item) {
    const plus_value = item.price - item.craft
    return {"plus_value": plus_value, "class": plus_value > 0 ? "plusValue" : "minusValue"}
  }

  function renderItems() {
    return items.map((item, i) =>
      <ListGroup.Item key={item._id} variant="flush">
        <Card as="a" href={item.url} style={{ width: '18rem' }}>
          {/*TODO : add image to cart if possible (403 on dofus site)
          <Card.Img variant="top" src="https://static.ankama.com/dofus/www/game/items/200/6007.png"/>*/}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className={computePlusValue(item).class}>{computePlusValue(item).plus_value}</Card.Text>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <ListGroup>
      </ListGroup>
    </>
  );
}
