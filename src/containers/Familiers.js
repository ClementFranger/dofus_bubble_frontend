import React, { useState, useEffect } from "react";
import { ListGroup, Card, OverlayTrigger } from "react-bootstrap";
import "./Container.css";
import { API } from "aws-amplify";
import { tooltipPrice } from "./Utils.js"

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

  function renderOverlayItemPrice(item) {
    return (item.price ?
      <OverlayTrigger key={item._id} placement="right" delay={{ show: 250, hide: 400 }} overlay={tooltipPrice(item.price)}>
        <Card.Title className={'title'}>{item.name}</Card.Title>
      </OverlayTrigger>
      : <Card.Title className={'title'}>{item.name}</Card.Title>
    );
  }

  function renderItems() {
    return familiersCraft.sort((a, b) => a.value > b.value ? 1 : -1).map((item, i) =>
      <ListGroup.Item key={i} variant="flush">
        <Card style={{ width: '20rem' }}>
          {/*TODO : add image to cart if possible (403 on dofus site)
          <Card.Img variant="top" src="https://static.ankama.com/dofus/www/game/items/200/6007.png"/>*/}
          <Card.Body>
            {renderOverlayItemPrice(item)}
            <Card.Text className={'title profit'}>{item.value}</Card.Text>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }

  return (
    <>
      <ListGroup horizontal>
        {renderItems()}
      </ListGroup>
    </>
  );
}
